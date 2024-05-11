
import { Link } from 'react-router-dom';
import error from '../assets/images/404r.jpg'
const ErrorPage = () => {
    return (
<div className='h-screen bg-no-repeat bg-cover w-full mx-auto'   style={{
              backgroundImage: `url(${error })`,
            }}
>       <div>
<button className=' pt-20'><Link className='flex justify-center md:ml-36 ml-16 px-5 py-2 text-white  rounded-xl bg-red-500' to={'/'}>Go Home</Link></button></div> </div>
    );
};

export default ErrorPage;