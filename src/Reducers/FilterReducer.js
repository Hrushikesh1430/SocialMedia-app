export const InitialState = {
  initialPosts: [],
  filteredPosts: [],
  searchList: [],
};

export const PostReducer = (state, { type, payLoad }) => {
  switch (type) {
    case "INITIAL_FETCH":
      return {
        ...state,
        initialPosts: payLoad,
        filteredPosts: payLoad,
      };
    case "CREATE_POST":
      return {
        ...state,
        initialPosts: payLoad,
        filteredPosts: payLoad,
      };
    case "FILTER_LIKES":
      return {
        ...state,
        filteredPosts: state.initialPosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount),
      };
    case "FILTER_DATE":
      return {
        ...state,
        filteredPosts: payLoad,
      };
    case "UPDATE_POSTS":
      return {
        ...state,
        initialPosts: payLoad,
        filteredPosts: payLoad,
      };
    // case "SEARCH_FILTER":
    //   return {
    //     ...state,
    //     searchList:
    //       payLoad.length === 0
    //         ? []
    //         : state.intialProductList
    //             .filter(({ brand, name }) => brand.toLowerCase().includes(payLoad) || name.toLowerCase().includes(payLoad))
    //             .slice(0, 7),
    //   };
    // case "SET_FILTERED_PRODUCTS":
    //   return { ...state, filteredProducts: payLoad };
    default:
      return state;
  }
};
