import React, { useState } from 'react';
// import 'rest-client';

// API_KEY = ENV['MAILGUN_API_KEY']
// API_URL = "https://api:#{API_KEY}@api.mailgun.net/v2/<your-mailgun-domain>"

// RestClient.post API_URL+"/messages",
//     :from => "fotoalbum@fotoalbum.com",
//     :to => "bulkova.katarina@gmail.com",
//     :subject => "Prospect",
//     :text => "Text body",
//     :html => "<b>HTML</b> version of the body!"


const RecruitForm: React.FC = () => {
    const [values, setValues] = useState({
        first_name:'', last_name:'', age:'', phone:'', email:'', description:''
    });
    
    return (
        <div className="flex items-center justify-center h-1/4 w-1/2 border-r-2 border-l-2 border-black">
            <div className="w-full bg-white shadow-lg p-8 ">
            <h2 className="block w-full text-center text-grey-darkest mb-6">Join us!</h2>
            <form className="space-y-4 text-xs mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
                <div className="md:w-full center">
                    <label className="block text-gray-600" htmlFor="first_name">Full Name</label>
                    <input className="w-full border border-black p-2 bg-gray-200 mt-1" 
                        type="text" required
                        name="full_name" 
                        id="full_name" />
                </div>
                <div className="md:w-full center">
                    <label className="block text-gray-600" htmlFor="age">Age</label>
                    <input className="w-full border border-black p-2 bg-gray-200 mt-1" 
                        type="number" required min='18' max='80'
                        name="age" 
                        id="age" />    
                </div>
                <div className="md:w-full center">
                    <label className="block text-gray-600" htmlFor="phone">Phone</label>
                    <input className="w-full border border-black p-2 bg-gray-200 mt-1" 
                        type="text" required 
                        name="phone" 
                        id="phone" />    
                </div>
                <div className="md:w-full center">
                    <label className="block text-gray-600" htmlFor="email">Email</label>
                    <input className="w-full border border-black p-2 bg-gray-200 mt-1" 
                        type="email" required
                        name="email" 
                        id="email" />    
                </div>
                <div className="md:w-full center">
                    <label className="block text-gray-600" htmlFor="self_description">Self Description</label>
                    {/* <input className="w-full border border-black p-2 bg-gray-200 mt-1" 
                        type="text" required
                        name="self_description" 
                        id="self_description" />     */}
                    <textarea class="w-full px-3 py-2 border border-black focus:outline-none bg-gray-200" 
                        rows="4" 
                        type="text" required 
                        name="self_description" 
                        id="self_description">
                    </textarea>
                </div>
                <button className="block bg-black hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit" >Submit</button>
            </form>
        </div>
        </div>      
    )
};

export default RecruitForm;