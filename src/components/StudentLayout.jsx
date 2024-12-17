
import React, { useState } from "react";

import { Layout, Button, Typography, Drawer, Card, Row, Col, Progress } from "antd";
import {
  FileTextOutlined,
  BellOutlined,
  BarChartOutlined,
  TeamOutlined,
  CalendarOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

const StudentLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Layout className="min-h-screen">
      <Header className="flex justify-between items-center bg-blue-500 p-4">
        <Button
          type="primary"
          icon={drawerOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={toggleDrawer}
          className={`p-2 ${drawerOpen ? 'bg-blue-500' : 'bg-blue-500'}`}
        >
          {drawerOpen ? 'Close' : 'Menu'}
        </Button>
      </Header>
      <Layout>
        <Drawer
          title="Menu"
          placement="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          className="bg-sky-200"
        >
          <Button type="link" icon={<FileTextOutlined />} className="text-blue-500">
           Timetable
          </Button>
          <Button type="link" icon={<BellOutlined />} className="text-blue-500">
            Notifications
          </Button>
          <Button type="link" icon={<BarChartOutlined />} className="text-blue-500">
            Results
          </Button>
          <Button type="link" icon={<TeamOutlined />} className="text-blue-500">
            Students
          </Button>
          <Button type="link" icon={<CalendarOutlined />} className="text-blue-500">
           Attendance
          </Button>
        </Drawer>
      <Content className=" p-4 bg-gray-100 min-h-screen flex justify-center items-center">
  <Row justify="center" className="w-full">
    <Col xs={24} sm={24} md={12} lg={8}>
    <Card bordered={false} className="bg-blue-400 text-white text-left shadow-lg p-6">
  {/* Card Heading */}
  <Title level={3} className="text-center mb-4">
    Student Profile
  </Title>

  <div className="flex flex-col items-start">
    {/* Progress Bar */}
    <div className="w-full mb-4">
      <Title level={4} className="text-white">Progress</Title>
      <Progress percent={70} strokeColor="#ffffff" trailColor="#4b5563" />
    </div>

    {/* Text Information */}
    <Title level={5} className="mt-2">Student Name</Title>
    <Title level={5}>Student ID</Title>
    <Title level={5}>Enrollment No</Title>
  </div>

  {/* Profile Picture */}
  <div className="mt-4 flex justify-center">
    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-800">
      Profile Picture
    </div>
  </div>
</Card>

    </Col>
  </Row>
</Content>


      </Layout>
    </Layout>
  );
};

export default StudentLayout;
