
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from'react-router-dom';
import { applyMiddleware, legacy_createStore } from 'redux';
import { rootReducer } from './modules/index.js';
import { Provider } from 'react-redux';
// import { createLogger } from 'vite';
import { createLogger } from 'redux-logger';
import { thunk } from'redux-thunk';
import { set_user, check } from './modules/user';



const logger = createLogger()
const store = legacy_createStore(rootReducer, applyMiddleware(logger, thunk))

function localUser(){ // 로컬 스토리지에서 로그인된 사람을확인할 수 있다.
  try {
    const user = localStorage.getItem('user');
    if(!user) return;
    store.dispatch(set_user(JSON.parse(user))); 
    store.dispatch(check());
  } catch (e) {
    console.log(e);
  }
}
localUser();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
