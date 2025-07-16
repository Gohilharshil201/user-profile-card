// App.js

import React from 'react';
import { Row, Col, Divider } from 'antd';
import UserProfileCard from './components/UserProfileCard';
import StatsCard from './components/StatsCard';
import ProjectTimeline from './components/ProjectTimeline';
import userProfiles from './userData';
import stats from './statsData';
import timelineItems from './timelineData';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Divider orientation="left">User Profiles</Divider>
      <Row gutter={[16, 16]} justify="center">
        {userProfiles.map((user) => (
          <Col key={user.id}>
            <UserProfileCard user={user} />
          </Col>
        ))}
      </Row>

      <Divider orientation="left">Dashboard Stats</Divider>
      <Row gutter={[16, 16]} justify="center">
        {stats.map((stat) => (
          <Col key={stat.id}>
            <StatsCard stat={stat} />
          </Col>
        ))}
      </Row>

      <Divider orientation="left">Project Timeline</Divider>
      <ProjectTimeline items={timelineItems} />
    </div>
  );
};

export default App;
