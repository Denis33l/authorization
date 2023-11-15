import { Layout } from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomInput } from '../../components/custom/custom-input'
import { CustomPasswordInput } from '../../components/custom/custom-password-input'
import { CustomButton } from '../../components/custom/custom-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Register = () => {
  return (
    <Layout>
            <Row align="middle" justify="center">
                <Card title="Sign up" style={{ width: "30rem" }}>
                    <Form onFinish={() => null}>
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
