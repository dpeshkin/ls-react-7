import {
  showRequest,
  showSuccess,
  showFailure
} from "../../actions/showPageActions";
import { handleActions } from "redux-actions";

export default handleActions(
  {
    [showRequest]: state => ({
      ...state,
      isFetching: true
    }),
    [showSuccess]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      results: payload
    }),
    [showFailure]: state => ({
      ...state,
      isFetching: false
    })
  },
  {
    isFetching: false,
    results: []
  }
);
