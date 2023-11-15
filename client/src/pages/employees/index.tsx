import { PlusCircleOutlined } from "@ant-design/icons"
import { CustomButton } from "../../components/custom/custom-button"
import { Layout } from "../../components/layout"
import { Col, Row, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useEffect } from 'react'

export const Emploees = () => {

    const navigate = useNavigate();
    const user = useSelector(selectUser);

    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    },[navigate, user])

    return (
        <Layout>
            <CustomButton type="primary" onClick={() => null} icon={<PlusCircleOutlined />}>
                Add
            </CustomButton>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Col>
            </Row>
        </Layout>
    )
}
