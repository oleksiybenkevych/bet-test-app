import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import {
    StyledForm,
    StyledField,
    StyledButton,
    ErrorMessage,
    AuthContainer,
    StyledLink,
} from './styles';
import * as Yup from 'yup';
import { isLoading, selectMessage } from '../../state/selectors';
import { actions } from '../../state/actions';

const LoginPage = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const message = useSelector(selectMessage);
    useState(() => {
        dispatch(actions.logout());
    }, []);

    const LoginSchema = Yup.object().shape({
        username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });

    return (
        <AuthContainer test-id="auth-container">
            <h2>Login</h2>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    dispatch(actions.login({ values, history }));
                }}
            >
                {({ errors, touched }) => (
                    <StyledForm>
                        <StyledField name="username" placeholder="username" />
                        {errors.username && touched.username && (
                            <ErrorMessage test-id="password-error">{errors.username}</ErrorMessage>
                        )}
                        <StyledField name="password" placeholder="password" />
                        {errors.password && touched.password && (
                            <ErrorMessage test-id="password-error">{errors.password}</ErrorMessage>
                        )}

                        <StyledButton type="submit">Submit</StyledButton>
                        {loading ? (
                            <ThreeDots color="#00BFFF" height={20} width={20} />
                        ) : (
                            message && <div>{message}</div>
                        )}

                        <StyledLink to="/register">Register</StyledLink>
                    </StyledForm>
                )}
            </Formik>
        </AuthContainer>
    );
};

export default LoginPage;
