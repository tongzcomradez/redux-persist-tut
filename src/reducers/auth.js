const initialState = {
  username: 'guest',
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          username: 'jonathan',
        }
      case 'LOGOUT':
        return initialState
      default:
        return state
    }
  }