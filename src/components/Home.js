 import React, { Fragment } from 'react';
 import { Heading } from './Heading';
 import {MemberList} from './MemberList'; 


 export const Home = () => {
     return (
         <Fragment>
             <div className="App">
             
                     <Heading />
                     <MemberList />
                
             </div>
         </Fragment>
     )
 }
 export default Home;


