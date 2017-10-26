export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({},state, {friends:[...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
        let friendsKept = state.friends.filter((friend)=> {
            return (friend.id !== action.id)
        })
        return Object.assign({},state, {friends: friendsKept})
    default:
      return state;
  }
}
