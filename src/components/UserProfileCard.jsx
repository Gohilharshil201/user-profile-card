import { Card, Avatar, Typography, Button, Space } from 'antd';
const { Title, Text, Paragraph } = Typography;

const UserProfileCard = ({ user }) => {
  return (
    <Card style={{ width: 300, margin: '1rem' }} hoverable>
      <Card.Meta
        avatar={<Avatar src={user.avatar} size={64} />}
        title={<Title level={4}>{user.name}</Title>}
        description={<Text type="secondary">{user.title}</Text>}
      />
      <Paragraph style={{ marginTop: '1rem' }}>{user.bio}</Paragraph>
      <Space>
        <Button type="link" href={user.links.linkedin} target="_blank">
          LinkedIn
        </Button>
        <Button type="link" href={user.links.github} target="_blank">
          GitHub
        </Button>
      </Space>
    </Card>
  );
};

export default UserProfileCard;
