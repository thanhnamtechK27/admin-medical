import React, { useState } from "react";

const initialAppointments = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "vana@gmail.com",
    gender: "Nam",
    date: "2025-05-10",
    issue: "Khám tim mạch",
    status: "Đã xác nhận",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "thib@gmail.com",
    gender: "Nữ",
    date: "2025-05-11",
    issue: "Khám da liễu",
    status: "Đang chờ",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levec@gmail.com",
    gender: "Nam",
    date: "2025-05-09",
    issue: "Khám tổng quát",
    status: "Đã hủy",
  },
];

const statusOptions = ["Đã xác nhận", "Đang chờ", "Đã hủy"];

const getStatusStyle = (status) => {
  switch (status) {
    case "Đã xác nhận":
      return "bg-green-100 text-green-600";
    case "Đang chờ":
      return "bg-yellow-100 text-yellow-600";
    case "Đã hủy":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý lịch hẹn</h1>
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-600 text-left text-sm">
            <tr>
              <th className="py-3 px-4">STT</th>
              <th className="py-3 px-4">Tên</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Giới tính</th>
              <th className="py-3 px-4">Ngày đặt</th>
              <th className="py-3 px-4">Vấn đề cần khám</th>
              <th className="py-3 px-4">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {appointments.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.gender}</td>
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4">{item.issue}</td>
                <td className="py-3 px-4">
                  <select
                    value={item.status}
                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    className={`text-xs font-medium px-3 py-1 rounded-full appearance-none ${getStatusStyle(item.status)} focus:outline-none`}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentManagement;
