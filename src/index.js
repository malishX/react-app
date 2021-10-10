import React from "react";
import ReactDom from "react-dom";



//Nested Components
//css
import './index.css'

//creating object array

const books = [
   {
         title :'The Storyteller:Tales of Life and Music',
         author :'Dave Grohl',
         img : 'https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg' ,
   },
   {
         title :'And Away',
         author :'Richard Osman',
         img : 'https://images-eu.ssl-images-amazon.com/images/I/71yBZOvXBVL._AC_UL200_SR200,200_.jpg' ,
   },{
         title :'Silverview: John Le CarréSilverview: John Le Carré',
         author :'John le Carré',
         img : 'https://images-eu.ssl-images-amazon.com/images/I/91NcJLzUc2L._AC_UL200_SR200,200_.jpg' ,
   },

];



function BookList() {
   return (
      <section className='booklist'>
         {
            books.map(
               (book)=> {
                  console.log(book)
                  const {img, title, author } = book
                  return (
                     <Book book = {book}></Book>
                  );
               }
            )
         }
      </section>
      
   );
}

const Book = (props) => {
   const {img, title, author, children} = props.book
   return (<article className='book'>
      <img 
      src= {img}
      alt=''
      />
      <h1>{title}</h1>      
      <h4>{author}</h4>
      {children}
   </article>
   );
};
ReactDom.render(<BookList />, document.getElementById('root'));