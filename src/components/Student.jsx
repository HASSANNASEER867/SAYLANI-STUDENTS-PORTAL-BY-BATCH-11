

import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { PieChartOutlined, FileTextOutlined, TeamOutlined } from "@ant-design/icons";
import Dashboard from './Dashboard';
import Courses from './Courses';
import Assignments from './Assignments';
import Notifications from './Notifications';
import Schedule from './Schedule';
import MainHome from "./MainHome";

const { Header, Content, Sider } = Layout;

const Student = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMenuClick = (e) => {
    setCurrentPage(e.key);
    if (isMobile) {
      setDrawerVisible(false); 
    }
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  // Handle window resize for mobile/desktop responsiveness
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 768);
  });

  const menuItems = [
    { key: "Dashboard", icon: <PieChartOutlined />, label: "Dashboard" },
    // { key: "Home", icon: <FileTextOutlined />, label: "Home" },
    { key: "Courses", icon: <FileTextOutlined />, label: "Courses" },
    { key: "Schedule", icon: <FileTextOutlined />, label: "Schedule" },
    { key: "Notifications", icon: <FileTextOutlined />, label: "Notifications" },
    { key: "Assignments", icon: <TeamOutlined />, label: "Assignments" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <Sider width={200} theme="dark">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["Dashboard"]}
            onClick={handleMenuClick}
            items={menuItems}
          />
        </Sider>
      )}

      {/* Main Layout */}
      <Layout>
        <Header style={{ display: "flex", alignItems: "center", background: "#000", padding: "0 20px" }}>
          {isMobile && (
            <Button
              type="primary"
              onClick={toggleDrawer}
              style={{
                marginRight: "10px",
                background: "#1890ff",
                borderColor: "#1890ff",
                fontWeight: "bold",
              }}
            >
              ☰
            </Button>
          )}
          <div className="text-white text-2xl font-bold flex-grow text-center">
            Student Portal
          </div>
        </Header>

        <Content style={{ padding: "0 20px", marginTop: "20px" }}>
          {currentPage === "Dashboard" && <Dashboard />}
          {/* {currentPage === "Home" && <MainHome/>} */}
          {currentPage === "Courses" && <Courses />}
          {currentPage === "Assignments" && <Assignments />}
          {currentPage === "Notifications" && <Notifications />}
          {currentPage === "Schedule" && <Schedule />}
        </Content>
      </Layout>

      {/* Mobile Drawer for Sidebar */}
      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          closable
          onClose={toggleDrawer}
          open={drawerVisible}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["Dashboard"]}
            onClick={handleMenuClick}
            items={menuItems}
          />
        </Drawer>
      )}
    </Layout>
  );
};

export default Student;





// import React, { useState } from "react";
// import { Layout, Menu, Button, Drawer } from "antd";
// import { PieChartOutlined, FileTextOutlined, TeamOutlined } from "@ant-design/icons";
// import Dashboard from './Dashboard';
// import Courses from './Courses';
// import Assignments from './Assignments';
// import Notifications from './Notifications';
// import Schedule from './Schedule';
// import MainHome from "./MainHome";

// const { Header, Content, Sider } = Layout;

// const Student = () => {
//   const [currentPage, setCurrentPage] = useState("Dashboard");
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const handleMenuClick = (e) => {
//     setCurrentPage(e.key);
//     if (isMobile) {
//       setDrawerVisible(false); // Close sidebar for mobile
//     }
//   };

//   const toggleDrawer = () => {
//     setDrawerVisible(!drawerVisible);
//   };

//   // Handle window resize for mobile/desktop responsiveness
//   window.addEventListener("resize", () => {
//     setIsMobile(window.innerWidth <= 768);
//   });

//   const menuItems = [
//     { key: "Dashboard", icon: <PieChartOutlined />, label: "Dashboard" },
//     { key: "Home", icon: <FileTextOutlined />, label: "Home" },
//     { key: "Courses", icon: <FileTextOutlined />, label: "Courses" },
//     { key: "Schedule", icon: <FileTextOutlined />, label: "Schedule" },
//     { key: "Notifications", icon: <FileTextOutlined />, label: "Notifications" },
//     { key: "Assignments", icon: <TeamOutlined />, label: "Assignments" },
//   ];

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       {/* Sidebar for Desktop */}
//       {!isMobile && (
//         <Sider width={200} theme="dark">
//           <Menu
//             theme="dark"
//             mode="inline"
//             defaultSelectedKeys={["Dashboard"]}
//             onClick={handleMenuClick}
//             items={menuItems}
//           />
//         </Sider>
//       )}

//       {/* Main Layout */}
//       <Layout>
//         <Header style={{ display: "flex", alignItems: "center", background: "#000", padding: "0 20px" }}>
//           {isMobile && (
//             <Button
//               type="primary"
//               onClick={toggleDrawer}
//               style={{
//                 marginRight: "10px",
//                 background: "#1890ff",
//                 borderColor: "#1890ff",
//                 fontWeight: "bold",
//               }}
//             >
//               ☰
//             </Button>
//           )}
//           <div className="text-white text-2xl font-bold flex-grow text-center">
//             Student Portal
//           </div>
//         </Header>

//         <Content style={{ padding: "0 20px", marginTop: "20px" }}>
//           {currentPage === "Dashboard" && <Dashboard />}
//           {currentPage === "Courses" && <Courses />}
//           {currentPage === "Assignments" && <Assignments />}
//           {currentPage === "Notifications" && <Notifications />}
//           {currentPage === "Schedule" && <Schedule />}
//         </Content>
//       </Layout>

//       {/* Mobile Drawer for Sidebar */}
//       {isMobile && (
//         <Drawer
//           title="Menu"
//           placement="left"
//           closable
//           onClose={toggleDrawer}
//           open={drawerVisible}
//         >
//           <Menu
//             theme="dark"
//             mode="inline"
//             defaultSelectedKeys={["Dashboard"]}
//             onClick={handleMenuClick}
//             items={menuItems}
//           />
//         </Drawer>
//       )}
//     </Layout>
//   );
// };

// export default Student;
