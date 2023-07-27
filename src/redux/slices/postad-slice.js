import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAds } from "../../graphql/mutations";
import { Storage, API } from "aws-amplify";
const initialState = {
  adCategory: "",
  adTitle: "",
  adDescription: "",
  adPrice: "",
  adImage: "",
  brand: "",
  adLocation: "",
  ads: [],
};

export const postAd = createAsyncThunk(
  "postad/postAd",
  async function saveAd(initialState) {
    try {
      const response1 = await Storage.put(
        initialState.adImage.name,
        initialState.adImage
      );
      const cognitoUserData = JSON.parse(
        localStorage.getItem("cognitoUserData")
      );

      // const user = {
      //   id: cognitoUserData.username,
      //   name: cognitoUserData.attributes.name,
      //   email: cognitoUserData.attributes.email,
      //   phoneNumber: cognitoUserData.attributes.phone_number,
      // };
      // console.log({ user });
      const inputs = {
        title: initialState.adTitle,
        description: initialState.adDescription,
        location: initialState.adLocation,
        condition: "USED",
        price: initialState.adPrice,
        isSold: true,
        image: initialState.adImage.name,
        category: initialState.adCategory,
      };
      console.log({ inputs });
      const response2 = await API.graphql({
        query: createAds,
        variables: { input: inputs },
      });
      console.log("response1 in thunk", response1);
      console.log("response2 in thunk", response2);
      return response2;
    } catch (error) {
      console.log("error in postAd thiunk", error);
      return error;
    }

    // const product = {
    //   name: "imag1",
    //   title: "Ad",
    //   description: 200,
    //   location: initialState.adLocation,
    //   condition: "used",
    //   price: initialState.adPrice,
    //   isSold: true,
    //   image: response.url,
    // };
    // await API.graphql({ query: createAds, variables: { input: product } });
  }
);
const postAdSlice = createSlice({
  name: "postad",
  initialState,
  reducers: {
    formFields(state, action) {
      state.adCategory = action.payload.adCategory;
      state.adTitle = action.payload.adTitle;
      state.adDescription = action.payload.adDescription;
      state.brand = action.payload.brand;
      state.adImage = action.payload.adImage;
      state.adLocation = action.payload.adLocation;
      state.adPrice = action.payload.adPrice;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postAd.pending, (state, action) => {
        console.log("sending request");
      })
      .addCase(postAd.fulfilled, (state, action) => {
        console.log("Upload s3 reponse", action.payload);
      })
      .addCase(postAd.rejected, (state, action) => {
        console.log("rejected", action.payload);
      });
  },
});

export const postAdActions = postAdSlice.actions;
const postAdReducer = postAdSlice.reducer;
export default postAdReducer;
