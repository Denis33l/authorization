import { Comment } from '@prisma/client';
import { Form, Input, Button } from 'antd';

interface CommentFormProps {
  onFinish: (values: Comment) => void;
  btnText: string;
  title: string;
  error?: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ onFinish, title, btnText, error }) => {
  return (
    <Form name="comment-form" onFinish={onFinish}>
      <Form.Item name="text" rules={[{ required: true, message: 'Please input your comment!' }]}>
        <Input.TextArea rows={4} placeholder="Type your comment here" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {btnText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;