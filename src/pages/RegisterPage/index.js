import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { ThreeDots } from 'react-loader-spinner';
import { actions } from '../../state/actions';
import { isLoading, selectMessage } from '../../state/selectors';
import {
    StyledForm,
    StyledField,
    StyledButton,
    ErrorMessage,
    AuthContainer,
    StyledLink,
} from '../LoginPage/styles';

import * as Yup from 'yup';

const RegisterPage = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const message = useSelector(selectMessage);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });

    return (
        <AuthContainer>
            <h2>Register</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values) => {
                    dispatch(actions.register({ values, history }));
                }}
            >
                {({ errors, touched }) => (
                    <StyledForm>
                        <StyledField name="firstName" placeholder="First Name" />
                        {errors.firstName && touched.firstName && (
                            <ErrorMessage>{errors.firstName}</ErrorMessage>
                        )}
                        <StyledField name="lastName" placeholder="Last Name" />
                        {errors.lastName && touched.lastName && (
                            <ErrorMessage>{errors.lastName}</ErrorMessage>
                        )}
                        <StyledField name="username" placeholder="username" />
                        {errors.username && touched.username && (
                            <ErrorMessage>{errors.username}</ErrorMessage>
                        )}
                        <StyledField name="password" placeholder="password" />
                        {errors.password && touched.password && (
                            <ErrorMessage>{errors.password}</ErrorMessage>
                        )}

                        <StyledButton type="submit">Submit</StyledButton>
                        {loading ? (
                            <ThreeDots color="#00BFFF" height={20} width={20} />
                        ) : (
                            message && <div>{message}</div>
                        )}
                        <StyledLink to="/login" className="btn btn-link">
                            Cancel
                        </StyledLink>
                    </StyledForm>
                )}
            </Formik>
        </AuthContainer>
    );
};

export default RegisterPage;
