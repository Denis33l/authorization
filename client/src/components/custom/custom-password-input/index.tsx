import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type Props = {
    name: string;
    placeholder: string;
    dependecies?: NamePath[];
}

export const CustomPasswordInput: React.FC<Props> = ({
    name,
    placeholder,
    dependecies
}) => {
    return (
        <Form.Item
            name={name}
            dependencies={dependecies}
            hasFeedback
            rules={[{
                required: true,
                message: 'Required field'
            }, ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value) {
                        return Promise.resolve();
                    }

                    if (name === 'confirmPassword') {
                        if (!value || getFieldValue(("password")) === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords must match'))
                    } else {
                        if (value.length < 6) {
                            return Promise.reject(new Error('The password must contain at least 6 characters'))
                        }
                        return Promise.resolve();
                    }
                }
            })]}>
            <Input.Password placeholder={placeholder} size='large' />
        </Form.Item>
    )
}
