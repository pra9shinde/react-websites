import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FromWrap, Icon, Text } from './signinElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FromWrap>
                    <Icon to='/'>₹rupee</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' required></FormInput>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password?</Text>
                        </Form>
                    </FormContent>
                </FromWrap>
            </Container>
        </>
    );
};

export default SignIn;
