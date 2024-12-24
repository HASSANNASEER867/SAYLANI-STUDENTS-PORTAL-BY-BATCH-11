import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { UserOutlined, FileDoneOutlined, AppstoreAddOutlined } from "@ant-design/icons";
// import "./Dashboard.css"; //

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Row gutter={16}>
        {/* Dashboard Cards */}
        <Col span={8}>
        <Card style={{ backgroundColor: "#d6e4ff", borderColor: "#000000" }}>
            <Statistic
              title="Total Students"
              value={1128}
              prefix={<UserOutlined />}
              suffix="Students"
            />
          </Card>
        </Col>
        <Col span={8}>
        <Card style={{ backgroundColor: "#d6e4ff", borderColor: "#000000" }}>
            <Statistic
              title="Total Assignments"
              value={32}
              prefix={<FileDoneOutlined />}
              suffix="Assignments"
            />
          </Card>
        </Col>
        <Col span={8}>
        <Card style={{ backgroundColor: "#d6e4ff", borderColor: "#000000" }}>
            <Statistic
              title="Courses Enrolled"
              value={5}
              prefix={<AppstoreAddOutlined />}
              suffix="Courses"
            />
          </Card>
        </Col>
      </Row>

      {/* Graph/Chart Section (Optional) */}
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card title="Performance Over Time" bordered={false}>
            {/* Insert any chart/graph component here */}
            <p>Performance chart will go here.</p>
          </Card>
        </Col>
      </Row>

      {/* Additional Stats or Information */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Card title="Upcoming Events" bordered={false}>
            <ul>
              <li>Assignment Deadline: 15th December</li>
              <li>Next Course Session: 18th December</li>
            </ul>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Recent Activity" bordered={false}>
            <ul>
              <li>Completed Assignment: "Math Homework"</li>
              <li>Enrolled in Course: "Data Structures"</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
