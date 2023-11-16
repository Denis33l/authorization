import { Layout } from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomInput } from '../../components/custom/custom-input'
import { CustomPasswordInput } from '../../components/custom/custom-password-input'
import { CustomButton } from '../../components/custom/custom-button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { UserData, useRegisterMutation } from '../../app/services/auth'
import { useState } from 'react'
import { isErrorWithMessage } from '../../utils/is-error-with-message'

export const Register = () => {
    const navigate = useNavigate()
    const [registerUser, registerUserResult] = useRegisterMutation()
    const [error, setError] = useState('');

    const register = async (data: UserData) => {
        try {
            await registerUser(data).unwrap();
            navigate("/")
            
        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError('Unknown error')
            }
        }
    }
  return (
    <Layout>
            <Row align="middle" justify="center">
                <Card title="Sign up" style={{ width: "30rem" }}>
                    <Form onFinish={register}>
                        <CustomInput name='name' placeholder='Name' type='name' />
                        <CustomInput name='email' placeholder='Email' type='email' />
                        <CustomPasswordInput name='password' placeholder='Password' />
                        <CustomPasswordInput name='confirmPassword' placeholder='Confirm your password' />
                        <CustomButton type='primary' htmlType='submit'>Login</CustomButton>
                        <Space direction='vertical' size='large'>
                            <Typography.Text><Link to={Paths.login}>Or Log in using</Link></Typography.Text>
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>
  )
}
