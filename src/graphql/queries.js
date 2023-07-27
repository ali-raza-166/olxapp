/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAdsHistory = /* GraphQL */ `
  query GetAdsHistory($id: ID!) {
    getAdsHistory(id: $id) {
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
export const listAdsHistories = /* GraphQL */ `
  query ListAdsHistories(
    $filter: ModelAdsHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdsHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          email
          phoneNumber
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
      nextToken
    }
  }
`;
export const getFavorites = /* GraphQL */ `
  query GetFavorites($id: ID!) {
    getFavorites(id: $id) {
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
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          email
          phoneNumber
          createdAt
          updatedAt
        }
        ads {
          nextToken
        }
        createdAt
        updatedAt
        userFavoritesId
      }
      nextToken
    }
  }
`;
export const getAds = /* GraphQL */ `
  query GetAds($id: ID!) {
    getAds(id: $id) {
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
export const listAds = /* GraphQL */ `
  query ListAds($filter: ModelAdsFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
