import { show } from "../api";
import {
  showRequest,
  showSuccess,
  showFailure
} from "../actions/showPageActions";

const showPageMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(show => {
        store.dispatch(showSuccess(show));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }
  return next(action);
};

export default showPageMiddleware;
