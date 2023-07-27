/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      favorites {
        items {
          id
          createdAt
          updatedAt
          userFavoritesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      favorites {
        items {
          id
          createdAt
          updatedAt
          userFavoritesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      favorites {
        items {
          id
          createdAt
          updatedAt
          userFavoritesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAdsHistory = /* GraphQL */ `
  mutation CreateAdsHistory(
    $input: CreateAdsHistoryInput!
    $condition: ModelAdsHistoryConditionInput
  ) {
    createAdsHistory(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      ad {
        id
        title
        description
        location
        condition
        price
        isSold
        image
        category
        user {
          id
          name
          email
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        favoritesAdsId
        adsUserId
        owner
      }
      createdAt
      updatedAt
      adsHistoryUserId
      adsHistoryAdId
    }
  }
`;
export const updateAdsHistory = /* GraphQL */ `
  mutation UpdateAdsHistory(
    $input: UpdateAdsHistoryInput!
    $condition: ModelAdsHistoryConditionInput
  ) {
    updateAdsHistory(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      ad {
        id
        title
        description
        location
        condition
        price
        isSold
        image
        category
        user {
          id
          name
          email
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        favoritesAdsId
        adsUserId
        owner
      }
      createdAt
      updatedAt
      adsHistoryUserId
      adsHistoryAdId
    }
  }
`;
export const deleteAdsHistory = /* GraphQL */ `
  mutation DeleteAdsHistory(
    $input: DeleteAdsHistoryInput!
    $condition: ModelAdsHistoryConditionInput
  ) {
    deleteAdsHistory(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      ad {
        id
        title
        description
        location
        condition
        price
        isSold
        image
        category
        user {
          id
          name
          email
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        favoritesAdsId
        adsUserId
        owner
      }
      createdAt
      updatedAt
      adsHistoryUserId
      adsHistoryAdId
    }
  }
`;
export const createFavorites = /* GraphQL */ `
  mutation CreateFavorites(
    $input: CreateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    createFavorites(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      ads {
        items {
          id
          title
          description
          location
          condition
          price
          isSold
          image
          category
          createdAt
          updatedAt
          favoritesAdsId
          adsUserId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavoritesId
    }
  }
`;
export const updateFavorites = /* GraphQL */ `
  mutation UpdateFavorites(
    $input: UpdateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    updateFavorites(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      ads {
        items {
          id
          title
          description
          location
          condition
          price
          isSold
          image
          category
          createdAt
          updatedAt
          favoritesAdsId
          adsUserId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavoritesId
    }
  }
`;
export const deleteFavorites = /* GraphQL */ `
  mutation DeleteFavorites(
    $input: DeleteFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    deleteFavorites(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      ads {
        items {
          id
          title
          description
          location
          condition
          price
          isSold
          image
          category
          createdAt
          updatedAt
          favoritesAdsId
          adsUserId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavoritesId
    }
  }
`;
export const createAds = /* GraphQL */ `
  mutation CreateAds(
    $input: CreateAdsInput!
    $condition: ModelAdsConditionInput
  ) {
    createAds(input: $input, condition: $condition) {
      id
      title
      description
      location
      condition
      price
      isSold
      image
      category
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      favoritesAdsId
      adsUserId
      owner
    }
  }
`;
export const updateAds = /* GraphQL */ `
  mutation UpdateAds(
    $input: UpdateAdsInput!
    $condition: ModelAdsConditionInput
  ) {
    updateAds(input: $input, condition: $condition) {
      id
      title
      description
      location
      condition
      price
      isSold
      image
      category
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      favoritesAdsId
      adsUserId
      owner
    }
  }
`;
export const deleteAds = /* GraphQL */ `
  mutation DeleteAds(
    $input: DeleteAdsInput!
    $condition: ModelAdsConditionInput
  ) {
    deleteAds(input: $input, condition: $condition) {
      id
      title
      description
      location
      condition
      price
      isSold
      image
      category
      user {
        id
        name
        email
        phoneNumber
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      favoritesAdsId
      adsUserId
      owner
    }
  }
`;
