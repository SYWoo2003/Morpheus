import React from 'react';
import { Route } from 'react-router-dom';
import { Main, About } from '../pages';
import GlobalStyle from '../components/globalstyle';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Route exact path="/" component={Main} />
      <Route exact path="/ABOUT" component={About} />
    </div>
  );
}

export default App;