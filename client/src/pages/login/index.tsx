import { Layout } from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomInput } from '../../components/custom/custom-input'
import { CustomPasswordInput } from '../../components/custom/custom-password-input'
import { CustomButton } from '../../components/custom/custom-button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { UserData, useLoginMutation } from '../../app/services/auth'
import { isErrorWithMessage } from '../../utils/is-error-with-message'
import { useState } from 'react'
import { ErrorMessage } from '../../components/error-message'

export const Login = () => {
    const navigate = useNavigate()
    const [loginUser, loginUserResult] = useLoginMutation()
    const [error, setError] = useState('');

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
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
                <Card title="Log in" style={{ width: "30rem" }}>
                    <Form onFinish={login}>
                        <CustomInput name='email' placeholder='Email' type='email' />
                        <CustomPasswordInput name='password' placeholder='Password' />
                        <CustomButton type='primary' htmlType='submit'>Login</CustomButton>
                        <Space direction='vertical' size='large'>
                            <Typography.Text><Link to={Paths.register}>Or Sign Up Using</Link></Typography.Text>
                            <ErrorMessage message={error} />
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>
    )
}
