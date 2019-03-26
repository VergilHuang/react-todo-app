const userInfo = (state = {
  name: 'Vergil',
  motto: 'To gain, to pay!'
}, action) => {
  switch (action.type) {
  case 'MODIFY_USER':
    return {
      ...state,
      motto: action.motto
    };
  default :
    return state;
  }
};

export default userInfo;