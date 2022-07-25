import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContainer } from '../LoginPage/styles';

const HomePage = () => {
    return (
        <AuthContainer>
            <h1>Hi !</h1>
            <p>You're logged in with React!!</p>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </AuthContainer>
    );
};

export default HomePage;
