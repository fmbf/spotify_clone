import { combineReducers } from 'redux';

import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import playerReducer from './player_reducer';


const rootReducer = combineReducers({
  entities,
  playback: playerReducer,
  session,
  errors,
  // ui,
});

export default rootReducer;
