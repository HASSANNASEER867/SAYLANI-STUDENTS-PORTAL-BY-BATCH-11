import React from "react";
import { Layout } from "antd";

const Courses = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Mathematics</h3>
            <p className="mt-4">Instructor: John Doe</p>
            <p>Status: Ongoing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Physics</h3>
            <p className="mt-4">Instructor: Jane Smith</p>
            <p>Status: Completed</p>
          </div>
          {/* Add more courses as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
