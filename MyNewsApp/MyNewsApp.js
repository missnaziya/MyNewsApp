import React, {useState} from 'react'
// import {Navbar,Nav,Container} from 'react-bootstrap';
// import { Link, Route } from 'react-router-dom';
import axios from 'axios'
const MyNewsApp = () => {
       const  [data,setData] = useState();

       const fetch = ( ) => {
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bf0b122680e14d70bd25a17fed641be7')
        .then((res)=>{
            setData(res.data.articles);
            console.log(res.data);
            
        })
       }
           
       const GetNews = (value)=>{
               <div>
          {value.data.articles}
               </div>   
       
            }
  return (
      <div>
        <button onClick={GetNews}>click me</button>
         

        <div>
          <h1>
          {data} hello
          </h1>
               </div>





        {/* <button className='btn btn-primary'>click me</button>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
         <Route>
         <Link to="#home" >Home</Link>
            <Link to="">Features</Link>
            <Link to="#pricing">Pricing</Link>
         </Route>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  )
}

export default MyNewsApp