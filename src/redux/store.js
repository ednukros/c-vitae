import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { heroReducer } from "./hero/hero.reducer";
import { activeReducer } from "./active/active.reducer";

const rootReducer = combineReducers({
   
    hero: heroReducer,
    active: activeReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
