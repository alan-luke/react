let React = require('react');
let ReactDOM = require('react-dom');
let AppComponent = require('./components/productBox.js');
ReactDOM.render(<AppComponent />, document.getElementById('content'));
let Greet = require('./components/greet.js');
ReactDOM.render(<Greet name="朱斐斐" />, document.getElementById('greet'));
