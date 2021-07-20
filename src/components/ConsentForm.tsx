import React from 'react';
import logo from '../images/logo--light.svg';

interface ConsentFormProps {
  onClick: () => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ onClick }) => (
  <div className="fixed z-10 flex items-center justify-center w-full h-full">
    <div className="flex flex-col max-w-xs gap-5 pb-6 mx-6 bg-white justify-items-center">
      <div className="bg-black">
        <img src={logo} alt="ModAg logo" className="h-16 p-2 m-auto" />
      </div>
      <p className="px-2 text-4xl font-bold text-center">This site may contain explicit content.</p>
      <button
        type="button"
        className="p-3 m-auto mt-6 text-white bg-black"
        onClick={() => onClick()}>
        I’m over 18 years old
      </button>
      <a href="https://www.youtubekids.com/" className="text-center text-black">
        I wan’t my mommy
      </a>
    </div>
  </div>
);

export default ConsentForm;
