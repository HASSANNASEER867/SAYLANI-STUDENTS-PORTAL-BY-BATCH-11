import React from "react";
import { Layout } from "antd";

const Schedule = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Schedule</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Monday</h3>
            <p className="mt-4">Math: 9:00 AM - 10:30 AM</p>
            <p>Physics: 11:00 AM - 12:30 PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tuesday</h3>
            <p className="mt-4">Chemistry: 9:00 AM - 10:30 AM</p>
            <p>English: 11:00 AM - 12:30 PM</p>
          </div>
          {/* Add more schedules as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
