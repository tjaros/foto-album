import React from 'react';
import RecruitForm from './RecruitForm';

const RecruitComponent: React.FC = () => {
    return (
        <div className="h-1/4 grid md:grid-cols-2 items-center my-10 bg-black">
            {/* <div className="flex flex-col"> */}
                <div className="h-1/4 text-2xl mr-4 space-y-4">
                    <div className="flex flex-row-reverse text-white">Do you want to join us?</div>
                    <div className="flex flex-row-reverse text-white">Be part of something appealing?</div>
                    <div className="flex flex-row-reverse text-white">There are always new faces wanted!</div>
                    <div className="flex flex-row-reverse text-white">Let us know and we will contact you!</div>

                </div>
{/* 
            </div>
            <div className="flex flex-col justify-end"> */}
            <RecruitForm />

            {/* </div> */}
        </div>
    )
};

export default RecruitComponent;