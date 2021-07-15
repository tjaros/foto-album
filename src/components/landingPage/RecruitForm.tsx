import React from 'react';

const RecruitForm: React.FC = () => {
    // const [values, setValues] = useState({
    //     first_name:'', last_name:'', age:'', phone:'', email:'', description:''
    // });
    return (
        <div className="flex items-center h-1/4 w-1/2 border-2 border-black">
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
                        type="text" required min='1' max='99'
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
                        type="text" required
                        name="email" 
                        id="email" />    
                </div>
                <div className="md:w-full center">
                    <label className="block text-gray-600" htmlFor="self_description">Self Description</label>
                    {/* <input className="w-full border border-black p-2 bg-gray-200 mt-1" 
                        type="text" required
                        name="self_description" 
                        id="self_description" />     */}
                    <textarea class="w-full px-3 py-2 border border-black focus:outline-none bg-gray-200" rows="4"></textarea>
                </div>
                <button className="block bg-black hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
            </form>

        </div>
        </div>
        
    )
};

export default RecruitForm;