import React from 'react';
import { useRoutes } from 'react-router-dom';
import Routes from './routes';
import './App.css';

function App() {

  const router =useRoutes(Routes)
  return (
    <div className="App">
      {router}
      
    </div>
  );
}

export default App;
