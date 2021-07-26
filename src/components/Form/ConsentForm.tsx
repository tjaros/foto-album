import React from 'react';
import { Logo } from '../Image';

interface ConsentFormProps {
  onClick: () => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ onClick }) => (
  <div className="fixed z-50 flex items-center justify-center w-screen h-screen filter backdrop-blur-md">
    <div className="flex flex-col max-w-xs gap-5 pb-6 mx-6 bg-white justify-items-center">
      <div className="p-2 bg-black">
        <Logo className="h-10 mx-auto" />
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
