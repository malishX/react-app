import React from "react";
import ReactDom  from "react-dom";

//stateless functional component
//always return jsx

// function Greeting(){
//    return <h4>Lets finish component and complete course today in 6 hours</h4>;
// }

const Greeting = () => {
   return React.createElement('h1', {}, 'hellow world');
}

ReactDom.render(<Greeting/>, document.getElementById('root')); 