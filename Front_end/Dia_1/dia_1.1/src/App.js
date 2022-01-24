import './App.css';
import Header from './header';
import Content from './content';
import Footer from './Footer';
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
