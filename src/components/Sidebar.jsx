import React from "react";
import { Layout, Menu, Drawer } from "antd";
import { PieChartOutlined, TeamOutlined, FileTextOutlined, CalendarOutlined, BellOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = ({ isMobile }) => {
  const renderMenu = (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<TeamOutlined />}>
        <Link to="/courses">Courses</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<FileTextOutlined />}>
        <Link to="/assignments">Assignments</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<CalendarOutlined />}>
        <Link to="/schedule">Schedule</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<BellOutlined />}>
        <Link to="/notifications">Notifications</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <Sider width={240} theme="dark" collapsible>
          {renderMenu}
        </Sider>
      )}

      {/* Sidebar as Drawer for Mobile */}
      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          closable
          visible={true}
          onClose={() => {}}
        >
          {renderMenu}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
