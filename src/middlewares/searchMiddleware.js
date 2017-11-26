import { search } from "../api";
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from "../actions/searchActions";

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(shows => {
        store.dispatch(searchSuccess(shows));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }
  return next(action);
};

export default searchMiddleware;
