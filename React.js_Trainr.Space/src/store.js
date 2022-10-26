import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

function userReducer(user = {}, action) {
  switch (action.type) {
    case "SET_USER":
      if (Object.keys(user).length === 0) {
        return { user: action.user };
      }

      return user;

    default:
      return user;
  }
}

function authReducer(authenticated = { auth: false, id: null }, action) {
  switch (action.type) {
    case "LOG_IN":
      authenticated.auth = true;
      authenticated.id = action.id;
      return authenticated;

    case "LOG_OUT":
      authenticated.auth = false;
      authenticated.id = null;
      storage.removeItem("persist:root");
      return authenticated;

    default:
      return authenticated;
  }
}

function classReducer(classes = {}, action) {
  switch (action.type) {
    case "USER_ADD_CLASS":
      return { classes: action.classes };
    default:
      return classes;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  classes: classReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

export const persistor = persistStore(store);
