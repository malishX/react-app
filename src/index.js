import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return jsx

// function Greeting(){
//    return <h4>Lets finish component and complete course today in 6 hours</h4>;
// }

// const Greeting = () => {
//    return React.createElement('h1', {}, 'hellow world');
// }

function Greeting() {
   return (
      <>
         <div onClick>
            <h1>
               hello work finish
            </h1>
            <ul>
               <li>
                  <a href='#'>Hellow world</a>
               </li>
               <img src='' alt='' />
               <input type='text' name='' id=''/>
            </ul>
         </div>
         <div></div>
      </>
   );
}


ReactDom.render(<Greeting />, document.getElementById('root'));