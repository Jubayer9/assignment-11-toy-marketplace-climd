import React from 'react';
import useTitle from '../../../Hook/UseTitle';
import { Link } from 'react-router-dom';

const ViewDetails = () => {
    useTitle('Details')
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/public/images.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">LOko !</h1>
      <p className="py-6">*  cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">* Provident cupiditate voluptatem et in.  fugiat  aut repudiandae et a id nisi ut assumenda excepturi exercitationem quasi. In deleniti eaque.</p>
      <p className="py-6">*  fugiat ut assumenda  et in. quaerat excepturi exercitationem quasi.Provident cupiditate voluptatem. In deleniti eaque aut repudiandae .</p>
      <Link to='/'><button className="btn btn-primary">Go Back</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetails;