import React, { useState } from "react";
import {
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
  Input,
  message,
  Typography,
  notification,
  Select,
  Progress,
} from "antd";
import {
  PieChartOutlined,
  FileTextOutlined,
  BellOutlined,
  BarChartOutlined,
  TeamOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import jsPDF from "jspdf";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Option } = Select;

const StudentLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [grade, setGrade] = useState("");

  // Add a new class
  const handleAddClass = (className) => {
    if (!className) {
      message.error("Class name cannot be empty");
      return;
    }
    setClasses([...classes, { id: classes.length + 1, name: className }]);
    message.success("Class added successfully");
  };

  // Add a new student
  const handleAddStudent = (studentName, classId) => {
    if (!studentName || !classId) {
      message.error("Student name and class are required");
      return;
    }
    setStudents([
      ...students,
      { id: students.length + 1, name: studentName, classId },
    ]);
    message.success("Student added successfully");
  };

  // Assign a task to a class
  const handleAssignTask = () => {
    if (!newTask || !selectedClass) {
      message.error("Task and class selection are required");
      return;
    }
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: newTask, classId: selectedClass },
    ]);
    setNewTask("");
    setSelectedClass("");
    setIsTaskModalOpen(false);
    message.success("Task assigned successfully");
  };

  // Grade submission
  const handleGradeSubmission = () => {
    if (!grade) {
      message.error("Grade cannot be empty");
      return;
    }
    setSubmissions(
      submissions.map((sub) =>
        sub.id === selectedSubmission.id ? { ...sub, grade } : sub
      )
    );
    setGrade("");
    setSelectedSubmission(null);
    setIsGradeModalOpen(false);
    message.success("Submission graded successfully");
  };

  // Generate a PDF report
  const generateReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Class Report", 10, 10);
    doc.setFontSize(12);
    tasks.forEach((task, index) => {
      doc.text(`${index + 1}. ${task.title}`, 10, 20 + index * 10);
    });
    doc.save("Class_Report.pdf");
    message.success("Class report generated successfully");
  };

  // Mark attendance
  const handleMarkAttendance = (studentId, date) => {
    setAttendance([
      ...attendance,
      { id: attendance.length + 1, studentId, date },
    ]);
    message.success("Attendance marked successfully");
  };

  // Analytics Charts (Placeholder)
  const renderAnalytics = () => {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Task Completion Rate">
            <Progress percent={75} status="active" />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Average Grade">
            <Progress type="dashboard" percent={85} />
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{ backgroundColor: "#001529" }}>
        <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
          <Title level={4} style={{ color: "white" }}>
            {collapsed ? "TMS" : "Student Management"}
          </Title>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<PieChartOutlined />} style={{ color: "#a6c1ee" }}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />} style={{ color: "#a6c1ee" }}>
            Classes
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />} style={{ color: "#a6c1ee" }}>
            Tasks
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />} style={{ color: "#a6c1ee" }}>
            Submissions
          </Menu.Item>
          <Menu.Item key="5" icon={<CalendarOutlined />} style={{ color: "#a6c1ee" }}>
            Attendance
          </Menu.Item>
          <Menu.Item key="6" icon={<BellOutlined />} style={{ color: "#a6c1ee" }}>
            Notifications
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 20, textAlign: "center", color: "#001529" }}>
          <Title level={3}>Student Dashboard</Title>
        </Header>
        <Content style={{ margin: "20px", backgroundColor: "#fff" }}>
          <div style={{ padding: 24 }}>
            {/* Overview */}
            <Row gutter={16} style={{ marginBottom: 20 }}>
              <Col span={8}>
                <Card title="Classes" bordered style={{ borderColor: "#001529", color: "#001529" }}>
                  {classes.length} classes
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Students" bordered style={{ borderColor: "#001529", color: "#001529" }}>
                  {students.length} students
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Tasks Assigned" bordered style={{ borderColor: "#001529", color: "#001529" }}>
                  {tasks.length} tasks
                </Card>
              </Col>
            </Row>

            {/* Analytics Section */}
            <div style={{ marginBottom: 20 }}>
              <Title level={4} style={{ color: "#001529" }}>Analytics</Title>
              {renderAnalytics()}
            </div>

            {/* Classes and Students */}
            <div style={{ marginBottom: 20 }}>
              <Title level={4} style={{ color: "#001529" }}>Manage Classes</Title>
              <Input.Search
                placeholder="Enter class name"
                enterButton="Add Class"
                onSearch={handleAddClass}
              />
            </div>

            <div>
              <Title level={4} style={{ color: "#001529" }}>Manage Students</Title>
              <Form layout="inline">
                <Form.Item>
                  <Input
                    placeholder="Student Name"
                    onChange={(e) => setSelectedClass(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Select
                    style={{ width: 200 }}
                    placeholder="Select Class"
                    onChange={setSelectedClass}
                  >
                    {classes.map((cls) => (
                      <Option key={cls.id} value={cls.id}>
                        {cls.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={() => handleAddStudent(selectedClass)}
                  >
                    Add Student
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default StudentLayout;
