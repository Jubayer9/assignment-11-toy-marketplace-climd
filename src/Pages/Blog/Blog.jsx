import React from 'react';
import NavBar from '../../Share/NavBar';
import Footer from '../../Share/Footer';
import useTitle from '../../Hook/UseTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div>
            <NavBar></NavBar>
            <div className='m-12'>
                <div>
                    <h2 className='text-lg font-bold text-red-500'>1Q. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='ms-6'>1A. 
What is an access token and refresh token? Here's how they work and where we should store them on the client-side

<br />
<h6 className='text-sky-400'>Access Token: </h6>

<ul>
    
    <li>* It is obtained through authentication and is included in API requests to prove the client's authorization.</li>
    <li>* Access tokens are short-lived and contain information like the client's identity, access scope, and expiration time.</li>
   
</ul>
<h6 className='text-sky-400'>Refresh Token:</h6>
<ul>
    <li>* A refresh token is a long-lived credential used to obtain a new access token without reauthentication.</li>
    <li>*It is issued alongside the access token and allows the client to refresh or extend the access token's validity.</li>
   
</ul>
<h6 className='text-sky-400'>Storage on the Client-Side:</h6>
<ul>
    <li>*Access tokens should be stored in memory (RAM) or secure storage that is inaccessible to other applications or scripts.</li>
    <li>*Refresh tokens should be stored in a more persistent and secure manner, such as encrypted storage, browser local storage, or secure HTTP-only cookies.</li>
    </ul>
 </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-red-500'>2Q. Compare SQL and NoSQL databases?</h2>
                    <p className='ms-6'>2A. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, <br /> while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, <br /> while NoSQL is better for unstructured data like documents or JSON. </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-red-500'>3Q. What is express js? What is Nest JS ?</h2>
                    <p className='ms-6'>3A. Nest offers a ready-to-use application architecture using controllers, providers, and modules. <br /> This enables developers and teams create applications that are simple to test and maintain.  </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-red-500'>4Q. What is MongoDB aggregate and how does it work ?</h2>
                    <p className='ms-6'>4A. MongoDB's aggregate is a feature that enables data aggregation and analysis within a MongoDB database. <br /> It allows you to perform advanced operations on collections of documents using a pipeline approach. <br />
                    <h6 className='text-sky-400'>works:</h6>
                   <ul>
                    <li>* Input: You provide a collection of documents as the input for aggregation.</li>
                    <li>* Pipeline Stages: You define a series of pipeline stages, which are applied sequentially to process the input documents.</li>
                    <li>* Aggregated Results: At the end of the pipeline, you receive the desired aggregated results based on the operations performed.</li>
                    </ul> 
                        
                         </p>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;