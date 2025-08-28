import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function NotFoundPage() {
    return ( 
        <div className='container p-5 mb-15'>
          <div className='row text-center p-5'>
        <h2>404 Not Found</h2>
        <p className='text-muted'>We couldn’t find the page you were looking for.</p>
         <button style={{width:"18%", margin:"0 auto"}} className='p-2 btn btn-primary fs-5'>Go Home</button>
       </div>
       </div>
     );
}

export default NotFoundPage;