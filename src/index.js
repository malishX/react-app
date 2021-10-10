import React from "react";
import ReactDom from "react-dom";



//Nested Components
//css
import './index.css'

//creating object
   const firstBook = {
         title :'The Storyteller:Tales of Life and Music',
         author :'Dave Grohl',
         img : 'https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg' ,
   }
   const secondBook = {
         title :'And Away',
         author :'Richard Osman',
         img : 'https://images-eu.ssl-images-amazon.com/images/I/71yBZOvXBVL._AC_UL200_SR200,200_.jpg' ,
   }
   
function BookList() {
   return (
      <section className='booklist'>
         <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel quos repellendus perspiciatis voluptas dolores commodi delectus odit molestiae dolore adipisci id nesciunt repellat repudiandae nisi atque, magni dignissimos maxime.
         </p>


         </Book>
         <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}>
 
         </Book>
         

      </section>
      
   );
}

const Book = (props) => {
   const {img, title, author, children} = props
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