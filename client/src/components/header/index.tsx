import { Layout, Space, Typography } from 'antd'
import { ExperimentOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { CustomButton } from '../custom/custom-button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import styles from './index.module.css';
import { logout, selectUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <Layout.Header className={styles.header}>
            <Space>
                <ExperimentOutlined className={styles.imgIcon} />
                <Link to={Paths.home}>
                    <CustomButton type='link'>
                        <Typography.Title level={1}>Images</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            {
                user ? (
                    <CustomButton type='default' icon={<LoginOutlined />} onClick={onLogoutClick}>
                        Log out
                    </CustomButton>
                ) : (
                    <Space>
                        <Link to={Paths.register}>
                            <CustomButton type='default' icon={<UserOutlined />} >Sign up</CustomButton>
                        </Link>
                        <Link to={Paths.login}>
                            <CustomButton type='default' icon={<LoginOutlined />}>Log in</CustomButton>
                        </Link>
                    </Space>
                )
            }
        </Layout.Header>
    )
}
