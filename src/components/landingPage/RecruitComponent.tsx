import { navigate } from 'gatsby';
import React from 'react';

const textLines = [
  'There are always new faces wanted.',
  'Do you want to join us?',
  'Be a part of something appealing?',
  'Let us know and we will contact you!'
];

interface RecruitProps {
  className?: string;
}

const RecruitComponent: React.FC<RecruitProps> = ({ className }) => (
  <div className={`w-full grid items-center px-2 py-4 my-4 bg-black md:grid-cols-5 md:my-10 ${className}`}>
    <div className="space-y-3 text-sm text-white md:text-xl md:mr-4 md:col-end-4 md:col-span-3">
      {textLines.map((text) => <p key={text} className="text-center md:text-right">{text}</p>)}
    </div>

    <div className="col-span-1 ml-4 justify-self-center md:justify-self-start md:col-end-5 md:">
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
