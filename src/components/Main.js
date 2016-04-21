require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Route from './Route.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Route/>
        <Footer/>
      </div>
    );
  }
}


Main.defaultProps = {
};

export default Main;

// require('normalize.css/normalize.css');
// require('styles/App.css');
//
// import React from 'react';
// require('normalize.css/normalize.css');
// require('styles/App.css');
//
// import React from 'react';
//
// let yeomanImage = require('../images/yeoman.png');
//
// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }
//
// AppComponent.defaultProps = {
// };
//
// export default AppComponent;
