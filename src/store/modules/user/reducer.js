import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = true;
        draft.profile = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
