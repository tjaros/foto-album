import React from 'react';
import Layout from '../components/layout/Layout';
import RegisterForm from '../components/registerPage/RegisterForm';


const recruit: React.FC = () => (
        <Layout>
            <div className="flex justify-center">
                <RegisterForm />
            </div>
        </Layout>   
    );

export default recruit;