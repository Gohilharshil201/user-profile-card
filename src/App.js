import { Row, Col } from 'antd';
import UserProfileCard from './components/UserProfileCard';
import userProfiles from './userData';

const App = () => {
  return (
    <Row gutter={[16, 25]} justify="center">
      {userProfiles.map((user) => (
        <Col key={user.id}>
          <UserProfileCard user={user} />
        </Col>
      ))}
    </Row>
  );
};

export default App;
