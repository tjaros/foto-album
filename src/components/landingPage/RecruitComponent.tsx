import { navigate } from 'gatsby';
import React from 'react';

const RecruitComponent: React.FC = () => (
  <div className="grid items-center my-4 bg-black md:ml-4 md:mr-4 h-1/4 md:grid-cols-5 md:my-10">
    <div className="space-y-3 text-sm md:text-xl md:mr-4 md:col-end-4 md:col-span-3">
      <div className="pt-4 text-center text-white md:flex md:flex-row-reverse">
        There are always new faces wanted.
      </div>
      <div className="text-center text-white md:flex md:flex-row-reverse">
        Do you want to join us?
      </div>
      <div className="text-center text-white md:flex md:flex-row-reverse">
        Be a part of something appealing?
      </div>
      <div className="pb-4 text-center text-white md:flex md:flex-row-reverse">
        Let us know and we will contact you!
      </div>
    </div>

    <div className="col-span-1 ml-4  justify-self-center md:justify-self-start md:col-end-5 md:">
      <button
        className="block p-4 mx-auto mb-4 text-lg text-black uppercase bg-white rounded hover:bg-teal-dark md:px-6"
        type="submit"
        role="link"
        onClick={() => {
          navigate('/recruit');
        }}>
        JOIN
      </button>
    </div>
  </div>
);

export default RecruitComponent;
