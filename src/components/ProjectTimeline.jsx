// components/ProjectTimeline.jsx

import React from 'react';
import { Timeline, Card, Tag } from 'antd';

const statusColor = {
  completed: 'green',
  'in-progress': 'blue',
  pending: 'orange'
};

const ProjectTimeline = ({ items }) => {
  return (
    <Card title="📅 Project Timeline" style={{ margin: '1rem auto', maxWidth: 600 }}>
      <Timeline mode="left">
        {items.map((item) => (
          <Timeline.Item
            key={item.id}
            label={<Tag color={statusColor[item.status]}>{item.date}</Tag>}
            color={statusColor[item.status]}
          >
            <strong>{item.title}</strong>
            <div style={{ marginTop: 4 }}>{item.description}</div>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default ProjectTimeline;
