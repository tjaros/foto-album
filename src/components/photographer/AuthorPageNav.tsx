import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = ["Photos", "Advertising", "Reviews", "Worked With"];

const AuthorPageNav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <nav className="flex flex-col md:flex-row w-full justify-center items-center bg-black md:h-16 rounded mt-20">
            <div className="md:hidden ">
                <button onClick={() => setIsExpanded(!isExpanded)} className="text-white text-2xl p-4">
                    {
                        (isExpanded) ? <FaTimes /> : <FaBars />
                    }
                </button>
            </div>
            {
                navItems.map((item) => (
                    <a className={`text-2xl text-white px-4 pb-1 md:pb-0 md:block ${(isExpanded)? `block` : `hidden`}`} href="#" >{item}</a>
                ))
            }
        </nav>
    );
};

export default AuthorPageNav;