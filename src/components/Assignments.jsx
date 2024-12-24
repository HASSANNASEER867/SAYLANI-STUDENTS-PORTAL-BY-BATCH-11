import React from "react";
import { Layout } from "antd";

const Assignments = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Assignments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Assignment 1</h3>
            <p className="mt-4">Due: 12th Dec</p>
            <p>Status: Pending</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Assignment 2</h3>
            <p className="mt-4">Due: 15th Dec</p>
            <p>Status: Completed</p>
          </div>
          {/* Add more assignments as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default Assignments;
