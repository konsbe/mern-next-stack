import { combineReducers } from "redux";
import projectsReducer from "./Projects/projects.reducer";
import blockchainReducer from "./BlockChain/blockchain.reducers";

const rootReducer = combineReducers({
  projects: projectsReducer,
  cryptos: blockchainReducer,
});

export default rootReducer;
