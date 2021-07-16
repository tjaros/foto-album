import React from 'react';
import { navigate } from 'gatsby';

export const UnregisteredLandingNavPanel: React.FC = () => {
    return (
        <div className="flex md:mr-4 md:ml-4 my-4 md:my-10 h-12 md:h-8 md:h-14 flex flex-row space-x-2 md:space-x-10 justify-center items-center bg-black text-ms md:text-xl text-white">
            <div className="text-white">Register and get access to exclusive content!</div>
            <button className=" self-center bg-white hover:bg-teal-dark text-black uppercase text-lg mx-auto p-2 md:px-4 md:py-1 rounded" type="submit" role="link" onClick={()=>{navigate("/register")}}>REGISTER</button>

        </div>
    )
};

export default UnregisteredLandingNavPanel;