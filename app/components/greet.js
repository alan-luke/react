var React = require('react');
var GreetBox;
GreetBox = React.createClass({
    render: function(){
        return <h1>hello {this.props.name}</h1>;
    }
});
module.exports = GreetBox;
