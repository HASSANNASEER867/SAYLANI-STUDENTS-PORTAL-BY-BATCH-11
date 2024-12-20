import React, { useState, useRef } from "react";
import {
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Button,
  Table,
  Typography,
  Progress,
  Drawer,
} from "antd";
import {
  MenuOutlined,
  PieChartOutlined,
  FileTextOutlined,
  TeamOutlined,
  CalendarOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const StudentPortal = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  // Handle screen size changes
  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768); // Mobile breakpoint
  };

  React.useEffect(() => {
    updateScreenSize(); // Check initial size
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Toggle Drawer
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  // Render Sidebar Menu
  const renderMenu = (
    <Menu
      ref={menuRef}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={[
        { key: "1", icon: <PieChartOutlined />, label: "Dashboard" },
        { key: "2", icon: <TeamOutlined />, label: "Courses" },
        { key: "3", icon: <FileTextOutlined />, label: "Assignments" },
        { key: "4", icon: <CalendarOutlined />, label: "Schedule" },
        { key: "5", icon: <BellOutlined />, label: "Notifications" },
      ]}
    />
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <Sider collapsible={false} theme="dark">
          <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
            <Title level={4} style={{ color: "white" }}>
              Student Portal
            </Title>
          </div>
          {renderMenu}
        </Sider>
      )}

      {/* Drawer for Mobile */}
      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          closable
          onClose={toggleDrawer}
          visible={drawerVisible}
          open={drawerVisible}
        >
          {renderMenu}
        </Drawer>
      )}

      <Layout>
        <Header style={{ background: "#fff", padding: "0 20px" }}>
          <Row justify="space-between" align="middle">
            <Col>
              {/* Hamburger Menu Button (Visible on Mobile) */}
              {isMobile && (
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={toggleDrawer}
                  style={{ fontSize: "20px" }}
                />
              )}
            </Col>
            <Col>
              <Title level={3} style={{ margin: 0, fontSize: isMobile ? "18px" : "24px" }}>
                Student Dashboard
              </Title>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: isMobile ? "10px" : "20px" }}>
          <div style={{ background: "#fff", padding: isMobile ? 12 : 24 }}>
            {/* Overview Section */}
            <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
              <Col xs={24} sm={12} lg={8}>
                <Card title="Enrolled Courses" bordered>
                  3 courses
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card title="Upcoming Assignments" bordered>
                  3 assignments
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card title="Notifications" bordered>
                  2 notifications
                </Card>
              </Col>
            </Row>

            {/* Analytics Section */}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Card title="Course Progress">
                  <Progress percent={60} status="active" />
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card title="Average Grade">
                  <Progress type="dashboard" percent={85} />
                </Card>
              </Col>
            </Row>

            {/* Notifications Section */}
            <div style={{ marginTop: 20 }}>
              <Title level={4} style={{ fontSize: isMobile ? "16px" : "20px" }}>
                Recent Notifications
              </Title>
              <ul style={{ paddingLeft: isMobile ? "10px" : "20px" }}>
                <li>Assignment 1 deadline extended</li>
                <li>New course material uploaded</li>
              </ul>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default StudentPortal;
// aaqib