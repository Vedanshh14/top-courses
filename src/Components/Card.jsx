import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ course }) => {
    const [liked, setLike] = useState(0);

    const clickHandler = () => {
        toast.dismiss(); // Dismiss any existing toasts before showing a new one
        if (liked === 1) {
            setLike(0);
            toast.warning("Disliked", { autoClose: 2000 });
        } else {
            setLike(1);
            toast.success("Liked", { autoClose: 2000 });
        }
    };
    

    return (
        <div className="w-[300px] bg-slate-800 rounded-md overflow-hidden">
            <div className='relative'>
                <img src={course.image.url} alt="Course" />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                        {liked === 1 ? ( <FcLike fontSize="1.75rem" /> ) : 
                         (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">{course.description}</p>
            </div>
        
        </div>
    );
};

export default Card;
