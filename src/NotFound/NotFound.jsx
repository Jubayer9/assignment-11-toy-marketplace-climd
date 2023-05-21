import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    
    return (
     <div>
        <Link  to={'/'}> <button className="btn ms-96 text-red-600 btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></Link>
           <div className='bg-white '
        style={{height:"790px"}}>
            <img  className='w-100 bg-white h-full' src="/public/marvel-404-page.jpg" alt="" />
        </div>
     </div>
    );
};

export default NotFound;