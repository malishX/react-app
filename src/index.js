import React from "react";
import ReactDom from "react-dom";



//Nested Components
//css
import './index.css'

function BookList() {
   return (
      <section>
         <Book/>
          <Book/>
           <Book/>
            <Book/>
             <Book/>
              <Book/>
               <Book/> 
               <Book/>
      </section>
      
   );
}

const Book = () => {
   return <article>
      <Image></Image>
      <Title/>
      <Author/>
   </article>
}

const Image = () => {
   return <img src= 'https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg' alt=''/>
}

const Title = () => {
   return  <h1> The Storyteller:Tales of Life and Music</h1>
}

const Author = () => {
   return <h4>Dave Grohl</h4>

}
ReactDom.render(<BookList />, document.getElementById('root'));