import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
const initialState = {
  userId: "",
  name: "",
  email: "",
  contactNumber: "",
  isLoggedIn: false,
  isConfirmedUser: false,
  signupError: null,
  signupStatus: "idle", // idle | succeeded | failed | loading
  signinError: null,
  signinStatus: "idle", // idle | succeeded | failed | loading
  accessToken: "",
  confirmUserStatus: "idle", // idle | succeeded | failed | loading
  veriCodeStatus: "idle", // idle | succeeded | failed | loading
  dynamoUserId: "",
};

export const CognitoSignUp = createAsyncThunk(
  "auth/signUp",
  async (initialState) => {
    try {
      const cognitoResponse = await Auth.signUp({
        username: initialState.email,
        password: initialState.password,

        attributes: {
          name: initialState.name,
          email: initialState.email,
          phone_number: initialState.contactNumber,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      const input = {
        name: initialState.name,
        email: initialState.email,
        phoneNumber: initialState.phone_number,
      };
      const dynamoResponse = await API.graphql(
        graphqlOperation(createUser, { input })
      );

      return { cognitoResponse, dynamoResponse };
    } catch (error) {
      return error;
    }
  }
);
export const CognitoConfirmUser = createAsyncThunk(
  "auth/confirmUser",
  async (initialState) => {
    console.log(initialState);
    const username = initialState.email;
    const code = initialState.verificationCode;
    try {
      const confirmUserRes = await Auth.confirmSignUp(username, code);
      return confirmUserRes;
    } catch (error) {
      console.log("error confirming sign up", error);
      return error;
    }
  }
);
export const CognitoResendVeriCode = createAsyncThunk(
  "auth/resendVeriCode",
  async (initialState) => {
    console.log(initialState);
    try {
      const resendCodeRes = await Auth.resendSignUp(initialState.email);
      console.log("code resent successfully");
      return resendCodeRes;
    } catch (error) {
      console.log("error resending code: ", error);
      return error;
    }
  }
);
export const CognitoSignIn = createAsyncThunk(
  "auth/signIn",
  async (initialState) => {
    try {
      const response = await Auth.signIn(
        initialState.email,
        initialState.password
      );
      return response;
    } catch (error) {
      console.log("error signing in", error);
      return error;
    }
  }
);

export const CognitoSignOut = createAsyncThunk("auth/signOut", async () => {
  try {
    const response = await Auth.signOut({ global: true });
    return response;
  } catch (error) {
    console.log("error signing out: ", error);
    return error;
  }
});
export const CognitoGetUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (error) {
      return error;
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    resetSignupStatus(state) {
      state.signinStatus = "idle";
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    signup(state, action) {},
  },
  extraReducers(builder) {
    builder
      .addCase(CognitoSignUp.pending, (state, action) => {
        state.signupStatus = "loading";
      })
      .addCase(CognitoSignUp.fulfilled, (state, action) => {
        if (action.payload?.cognitoResponse?.user) {
          state.signupStatus = "succeeded";
          state.dynamoUserId = action.payload.dynamoResponse.data.createUser.id;
          localStorage.setItem(
            "dynamoUserData",
            JSON.stringify(action.payload.dynamoResponse)
          );
        } else {
          state.signupStatus = "failed";
        }
      })
      .addCase(CognitoSignUp.rejected, (state, action) => {
        state.signupStatus = "failed";
        console.log(action.payload);
        state.signupError = action.error.message;
      })
      .addCase(CognitoConfirmUser.pending, (state, action) => {
        state.confirmUserStatus = "loading";
      })
      .addCase(CognitoConfirmUser.fulfilled, (state, action) => {
        if (action.payload === "SUCCESS") {
          state.confirmUserStatus = "succeeded";
        }
      })
      .addCase(CognitoConfirmUser.rejected, (state, action) => {
        state.confirmUserStatus = "failed";
      })
      .addCase(CognitoResendVeriCode.pending, (state, action) => {
        state.veriCodeStatus = "loading";
      })
      .addCase(CognitoResendVeriCode.fulfilled, (state, action) => {
        if (action.payload?.CodeDeliveryDetails) {
          state.veriCodeStatus = "succeeded";
          console.log("verification code succeeded", action.payload);
        }
      })
      .addCase(CognitoResendVeriCode.rejected, (state, action) => {
        state.veriCodeStatus = "failed";
      })
      .addCase(CognitoSignIn.pending, (state, action) => {
        state.signinStatus = "loading";
      })
      .addCase(CognitoSignIn.fulfilled, (state, action) => {
        console.log(action);

        if (action.payload.username) {
          state.signinStatus = "succeeded";
          state.signinError = null;
          state.isLoggedIn = true;
          state.accessToken =
            action.payload.signInUserSession.accessToken.jwtToken;
          state.userId = action.payload.username;
          state.name = action.payload.attributes.name;
          state.contactNumber = action.payload.attributes.phone_number;
          state.email = action.payload.attributes.username;
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem(
            "accessToken",
            action.payload.signInUserSession.accessToken.jwtToken
          );
          localStorage.setItem(
            "cognitoUserData",
            JSON.stringify(action.payload)
          );
        } else {
          state.signinError = "Error Signing in";
        }
      })
      .addCase(CognitoSignIn.rejected, (state, action) => {
        state.signinStatus = "failed";
        state.signinError = action.payload.message;
      })
      .addCase(CognitoSignOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.signinStatus = null;
        state.accessToken = "";
        localStorage.setItem("cognitoUserData", "");
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("accessToken", "");
        console.log(action);
      });
  },
});

export const authActions = authSlice.actions;
export const getSignupStatus = (state) => state.auth.signupStatus;
export const getConfirmUserStatus = (state) => state.auth.confirmUserStatus;
export const getSigninStatus = (state) => state.auth.signinStatus;
export const getVerificationCodeStatus = (state) => state.auth.veriCodeStatus;
export const getSignupError = (state) => state.auth.signupError;
export const getSigninError = (state) => state.auth.signinError;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const authReducer = authSlice.reducer;
export default authReducer;
