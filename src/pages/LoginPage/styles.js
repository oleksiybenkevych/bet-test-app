import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledForm = styled(Form)`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledField = styled(Field)`
    margin-top: 10px;
    padding: 5px;
`;

export const StyledButton = styled('button')`
    margin-top: 10px;
    padding: 5px;
    cursor: pointer;
`;

export const ErrorMessage = styled('div')`
    background-color: red;
    opacity: 50%;
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
`;

export const AuthContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledLink = styled(Link)`
    align-self: center;
    margin-top: 5px;
`;
