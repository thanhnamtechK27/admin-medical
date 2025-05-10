import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { topProducts } from "@/constants";
import { Footer } from "@/layouts/footer";
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";

const topDoctors = [
    {
      number: 1,
      name: "Dr. Nguyễn Văn A",
      image: "url_to_image",
      specialization: "Nội khoa",
      experience: 10,
      rating: 4.5,
      email: "nguyenvana@email.com",
    },
    {
      number: 2,
      name: "Dr. Trần Thị B",
      image: "url_to_image",
      specialization: "Ngoại khoa",
      experience: 8,
      rating: 4.2,
      email: "tranb@email.com",
    },
  ];
  
const chartTypes = {
  visits: {
    title: "Tổng quan lượt khám",
    unit: "lượt",
    color: "#2563eb",
  },
  revenue: {
    title: "Tổng doanh thu",
    unit: "USD",
    color: "#10b981",
  },
};

const timeRanges = ["Tháng", "Quý", "Năm"];

const mockData = {
  visits: {
    Tháng: [
      { name: "Tuần 1", value: 120 },
      { name: "Tuần 2", value: 180 },
      { name: "Tuần 3", value: 150 },
      { name: "Tuần 4", value: 200 },
    ],
    Quý: [
      { name: "Tháng 1", value: 450 },
      { name: "Tháng 2", value: 560 },
      { name: "Tháng 3", value: 620 },
    ],
    Năm: [
      { name: "Q1", value: 1500 },
      { name: "Q2", value: 1600 },
      { name: "Q3", value: 1700 },
      { name: "Q4", value: 1800 },
    ],
  },
  revenue: {
    Tháng: [
      { name: "Tuần 1", value: 1200 },
      { name: "Tuần 2", value: 1800 },
      { name: "Tuần 3", value: 1500 },
      { name: "Tuần 4", value: 2000 },
    ],
    Quý: [
      { name: "Tháng 1", value: 4500 },
      { name: "Tháng 2", value: 5600 },
      { name: "Tháng 3", value: 6200 },
    ],
    Năm: [
      { name: "Q1", value: 15000 },
      { name: "Q2", value: 16000 },
      { name: "Q3", value: 17000 },
      { name: "Q4", value: 18000 },
    ],
  },
};

const DashboardPage = () => {
  const { theme } = useTheme();
  const [chartType, setChartType] = useState("visits");
  const [timeRange, setTimeRange] = useState("Tháng");

  const chart = chartTypes[chartType];
  const data = mockData[chartType][timeRange];

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Trang tổng quan</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
              <Package size={26} />
            </div>
            <p className="card-title">Tổng số bác sĩ</p>
          </div>
          <div className="card-body bg-slate-100 dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">25,154</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
              <TrendingUp size={18} />
              25%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
              <DollarSign size={26} />
            </div>
            <p className="card-title">Tổng hồ sơ bệnh án</p>
          </div>
          <div className="card-body bg-slate-100 dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">16,000</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
              <TrendingUp size={18} />
              12%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
              <Users size={26} />
            </div>
            <p className="card-title">Số lượng bệnh nhân</p>
          </div>
          <div className="card-body bg-slate-100 dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">15,400</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
              <TrendingUp size={18} />
              15%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
              <CreditCard size={26} />
            </div>
            <p className="card-title">Dịch vụ đã sử dụng</p>
          </div>
          <div className="card-body bg-slate-100 dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">12,340</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
              <TrendingUp size={18} />
              19%
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
      {/* Biểu đồ lượt khám */}
      <div className="bg-white dark:bg-slate-800 shadow rounded p-4 w-2/3">
        <div className="flex justify-between items-center mb-4">
          {/* Nút chọn loại biểu đồ */}
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                chartType === "visits" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setChartType("visits")}
            >
              Lượt khám
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                chartType === "revenue" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setChartType("revenue")}
            >
              Doanh thu
            </button>
          </div>

          {/* Nút chọn mốc thời gian */}
          <div className="flex gap-2">
            {timeRanges.map((range) => (
              <button
                key={range}
                className={`px-3 py-1 rounded-full text-sm ${
                  timeRange === range ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Biểu đồ */}
        <div>
          <h2 className="text-lg font-semibold mb-2">{chart.title}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chart.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={chart.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                formatter={(value) => `${value} ${chart.unit}`}
                contentStyle={{
                  borderRadius: 8,
                  backgroundColor: "#fff",
                }}
              />
              <XAxis dataKey="name" />
              <YAxis />
              <Area
                type="monotone"
                dataKey="value"
                stroke={chart.color}
                fill="url(#colorMain)"
                activeDot={{ r: 8 }}
                strokeWidth={3}
                animationDuration={800}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bảng top bác sĩ */}
      <div className="bg-white dark:bg-slate-800 shadow rounded p-4 w-1/3">
        <div className="card">
          <div className="card-header">
            <p className="card-title">Top Bác Sĩ</p>
          </div>
          <div className="card-body p-0">
            <div className="relative h-[300px] w-full overflow-auto rounded-none [scrollbar-width:_thin]">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-slate-700">
                    <th className="py-2 px-4 text-left">ID</th>
                    <th className="py-2 px-4 text-left">Tên</th>
                    <th className="py-2 px-4 text-left">Khoa</th>
                  </tr>
                </thead>
                <tbody>
                  {topDoctors.map((doctor) => (
                    <tr key={doctor.number} className="border-b dark:border-slate-600">
                      <td className="py-2 px-4">{doctor.number}</td>
                      <td className="py-2 px-4">{doctor.name}</td>
                      <td className="py-2 px-4">{doctor.specialization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Danh sách bác sĩ */}
      <div className="card">
        <div className="card-header">
          <p className="card-title">Danh sách bác sĩ</p>
        </div>
        <div className="card-body p-0">
          <div className="relative h-[500px] w-full overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head">Mã</th>
                  <th className="table-head">Bác sĩ</th>
                  <th className="table-head">Chuyên khoa</th>
                  <th className="table-head">Kinh nghiệm</th>
                  <th className="table-head">Đánh giá</th>
                  <th className="table-head">Thao tác</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {topProducts.map((doctor) => (
                  <tr key={doctor.number} className="table-row">
                    <td className="table-cell">{doctor.number}</td>
                    <td className="table-cell">
                      <div className="flex w-max gap-x-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="size-14 rounded-lg object-cover"
                        />
                        <div className="flex flex-col">
                          <p>{doctor.name}</p>
                          <p className="font-normal text-slate-600 dark:text-slate-400">
                            {doctor.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">{doctor.specialization}</td>
                    <td className="table-cell">{doctor.experience} năm</td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-2">
                        <Star size={18} className="fill-yellow-600 stroke-yellow-600" />
                        {doctor.rating}
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-4">
                        <button className="text-blue-500 dark:text-blue-600">
                          <PencilLine size={20} />
                        </button>
                        <button className="text-red-500">
                          <Trash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
    