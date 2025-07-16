// components/StatsCard.jsx

import React from 'react';
import { Card, Statistic, Avatar, Row, Col } from 'antd';

const StatsCard = ({ stat }) => {
  return (
    <Card style={{ width: 250, margin: '1rem' }} hoverable>
      <Row align="middle">
        <Col flex="40px">
          <Avatar size="large" style={{ backgroundColor: '#1890ff' }}>
            {stat.icon || '📊'}
          </Avatar>
        </Col>
        <Col flex="auto" style={{ marginLeft: 10 }}>
          <Statistic
            title={stat.title}
            value={stat.value}
            prefix={stat.prefix}
            suffix={stat.suffix}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default StatsCard;
