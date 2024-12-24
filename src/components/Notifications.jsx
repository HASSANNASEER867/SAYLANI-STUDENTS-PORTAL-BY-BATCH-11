import React from "react";
import { Layout } from "antd";

const Notifications = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Exam Schedule Released</h3>
            <p className="mt-2">The midterm exams will start from 29th Dec.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Assignment Reminder</h3>
            <p className="mt-2">Don't forget to submit Assignment 1 by 12th Dec.</p>
          </div>
          {/* Add more notifications as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
