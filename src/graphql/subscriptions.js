/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAdsHistory = /* GraphQL */ `
  subscription OnCreateAdsHistory(
    $filter: ModelSubscriptionAdsHistoryFilterInput
  ) {
    onCreateAdsHistory(filter: $filter) {
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
export const onUpdateAdsHistory = /* GraphQL */ `
  subscription OnUpdateAdsHistory(
    $filter: ModelSubscriptionAdsHistoryFilterInput
  ) {
    onUpdateAdsHistory(filter: $filter) {
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
export const onDeleteAdsHistory = /* GraphQL */ `
  subscription OnDeleteAdsHistory(
    $filter: ModelSubscriptionAdsHistoryFilterInput
  ) {
    onDeleteAdsHistory(filter: $filter) {
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
export const onCreateFavorites = /* GraphQL */ `
  subscription OnCreateFavorites(
    $filter: ModelSubscriptionFavoritesFilterInput
  ) {
    onCreateFavorites(filter: $filter) {
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
export const onUpdateFavorites = /* GraphQL */ `
  subscription OnUpdateFavorites(
    $filter: ModelSubscriptionFavoritesFilterInput
  ) {
    onUpdateFavorites(filter: $filter) {
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
export const onDeleteFavorites = /* GraphQL */ `
  subscription OnDeleteFavorites(
    $filter: ModelSubscriptionFavoritesFilterInput
  ) {
    onDeleteFavorites(filter: $filter) {
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
export const onCreateAds = /* GraphQL */ `
  subscription OnCreateAds(
    $filter: ModelSubscriptionAdsFilterInput
    $owner: String
  ) {
    onCreateAds(filter: $filter, owner: $owner) {
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
export const onUpdateAds = /* GraphQL */ `
  subscription OnUpdateAds(
    $filter: ModelSubscriptionAdsFilterInput
    $owner: String
  ) {
    onUpdateAds(filter: $filter, owner: $owner) {
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
export const onDeleteAds = /* GraphQL */ `
  subscription OnDeleteAds(
    $filter: ModelSubscriptionAdsFilterInput
    $owner: String
  ) {
    onDeleteAds(filter: $filter, owner: $owner) {
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
