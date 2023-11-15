import { Employee } from "@prisma/client";
import { Card, Form, Space } from "antd";
// import { CustomInput } from "../custom/custom-input";
import TextArea from "antd/es/input/TextArea";
import { ErrorMessage } from "../error-message";
import { CustomButton } from "../custom/custom-button";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T
}

export const EmployeeForm = ({ onFinish, title, btnText, error, employee }: Props<Employee>) => {
    return (
        <Card title={title} style={{ width: '30rem' }}>
            <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
                <TextArea rows={4} />
                <Space>
                    <ErrorMessage message={ error } />
                    {/* <CustomButton></CustomButton> */}
                </Space>
            </Form>
        </Card>
    )
}
