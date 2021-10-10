import React from "react";
import ReactDom from "react-dom";



//Nested Components
//css
import './index.css'
   const title = 'The Storyteller:Tales of Life and Music';
   const author = 'Dave Grohl';
   const img = 'https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg' ;
function BookList() {
   return (
      <section className='booklist'>
         <Book/>
         <Book/>
         <Book/>
         <Book/>
      </section>
      
   );
}

const Book = () => {
   return (<article className='book'>
      <img 
      src= {img}
      alt=''
      />
      <h1>{title}</h1>      
      <h4>{author}</h4>

   </article>
   );
};
ReactDom.render(<BookList />, document.getElementById('root'));