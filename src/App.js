import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './routes/Routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <Provider store={store}>
        <Routes />
        <ToastContainer />
    </Provider>
  )
}

export default App