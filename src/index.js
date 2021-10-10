import React from "react";
import ReactDom from "react-dom";



//Nested Components
//css
import './index.css'

//creating object array

const books = [
   {
         id: 1,
         title :'The Storyteller:Tales of Life and Music',
         author :'Dave Grohl',
         img : 'https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg' ,
   },
   {
         id : 2,
         title :'And Away',
         author :'Richard Osman',
         img : 'https://images-eu.ssl-images-amazon.com/images/I/71yBZOvXBVL._AC_UL200_SR200,200_.jpg' ,
   },{
         id: 3,
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
             
                  return (
                     <Book key={book.id} {...book}></Book>
                  );
               }
            )
         }
      </section>
      
   );
}

const Book = (props) => {
   const {img, title, author} = props
   const clickHandler = (e) => {
      console.log(e.target)
      alert('Hello world')

   }

   const complexExampele = (author) => {

   }
   return (<article className='book' onMouseOver={()=>{
      console.log(title)

   }}>
      <img 
      src= {img}
      alt=''
      />
      <h1 onClick={()=> console.log(title)}>{title}</h1>      
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Examnple</button>
      <button type="button" onClick={() =>complexExampele(author)}>more complex</button>
   </article>
   );
};
ReactDom.render(<BookList />, document.getElementById('root'));