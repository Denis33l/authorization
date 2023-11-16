import { PlusCircleOutlined } from "@ant-design/icons"
import { CustomButton } from "../../components/custom/custom-button"
import { Layout } from "../../components/layout"
import { Image, Row, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useEffect, useState } from 'react';
import  ExpandedImage  from '../../components/custom/custom-image/index';
import Modal from "../../components/imgPopup";
import { useGetAllCommentsQuery } from "../../app/services/comment";
import { ColumnsType } from "antd/es/table";


const columns: ColumnsType<Comment> = [
    {
        title: 'Comment',
        key: 'comment'
    }
]

export const Comments: React.FC = () => {
    const { data, isLoading } = useGetAllCommentsQuery();
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [navigate, user])


    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);

    }
    const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';    
    const { TextArea } = Input;
    return (
        <Layout>
            <Row gutter={[16, 24]}>
                <button onClick={openModal}>
                    <ExpandedImage src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"} />
                </button>
            </Row>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Image src={src} width={400} height={400} preview={false} alt="Image" />
                <TextArea rows={3} size="small"/>
                <CustomButton type="primary" onClick={() => null} icon={<PlusCircleOutlined />}>
                    Add
                </CustomButton>
            </Modal>
        </Layout>
    )
}