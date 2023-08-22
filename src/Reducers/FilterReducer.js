export const InitialState = {
  initialPosts: [],
  filteredPosts: [],
  searchPosts: [],
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
    case "FILTER_BY_DATE":
      return {
        ...state,
        filteredPosts: state.initialPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      };
    case "UPDATE_POSTS":
      return {
        ...state,
        initialPosts: payLoad,
        filteredPosts: payLoad,
      };
    // case "SEARCH_POSTS":
    //   return {
    //     ...state,
    //     searchPosts:
    //       payLoad.length === 0
    //         ? []
    //         : state.initialPosts
    //             .filter(({ username, mainName }) => username.toLowerCase().includes(payLoad) || mainName.toLowerCase().includes(payLoad))
    //             .slice(0, 4),
    //   };

    default:
      return state;
  }
};
