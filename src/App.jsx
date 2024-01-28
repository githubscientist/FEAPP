import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './utils/authContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './Index';

function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Index />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;