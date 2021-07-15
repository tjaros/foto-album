import { navigate } from 'gatsby';
import React from 'react';

const RecruitComponent: React.FC = () => {
    return (
        <div className="md:ml-4 md:mr-4 h-1/4 grid md:grid-cols-5 items-center my-4 md:my-10 bg-black">
            <div className="text-lg md:text-2xl md:mr-4 space-y-3 md:col-end-4 md:col-span-3">
                <div className="text-center md:flex md:flex-row-reverse text-white pt-4">There are always new faces wanted.</div>
                <div className="text-center md:flex md:flex-row-reverse text-white">Do you want to join us?</div>
                <div className="text-center md:flex md:flex-row-reverse text-white">Be part of something appealing?</div>
                <div className="text-center md:flex md:flex-row-reverse text-white pb-4">Let us know and we will contact you!</div>
            </div>

            <div className=" justify-self-center md:justify-self-start ml-4 md:col-end-5 md: col-span-1">
                <button className="block bg-white hover:bg-teal-dark text-black uppercase text-lg mx-auto p-4 md:p-6 rounded mb-4" type="submit" role="link" onClick={()=>{navigate("/recruit")}}>JOIN</button>
            </div>
        </div>
    )
};      

export default RecruitComponent;