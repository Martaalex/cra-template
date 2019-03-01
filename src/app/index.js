import React from 'react';

import { Header, Main, Footer } from './components';
import './index.scss';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Main />
        <select className="App--language-select">
          <option>English</option>
          <option>한국어</option>
        </select>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
