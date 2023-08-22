export const InitialUserState = {
  users: [],
  searchUsers: [],
};

export const UserReducer = (state, { type, payLoad }) => {
  switch (type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: payLoad,
      };
    case "SEARCH_USERS":
      return {
        ...state,
        searchUsers:
          payLoad.length === 0
            ? []
            : state.users
                .filter(
                  ({ username, firstName, lastName }) =>
                    username.toLowerCase().includes(payLoad) || firstName.toLowerCase().includes(payLoad) || lastName.toLowerCase().includes(payLoad)
                )
                .slice(0, 4),
      };
    default:
      return state;
  }
};
