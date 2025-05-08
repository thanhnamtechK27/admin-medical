import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "@/hooks/use-theme";
import { overviewData, recentSalesData, topProducts } from "@/constants";
import { Footer } from "@/layouts/footer";
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";

const DashboardPage = () => {
    const { theme } = useTheme();

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
                        <p className="card-title">Tổng hồ sơ bệnh ánán</p>
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

            {/* Biểu đồ lượt khám */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <div className="card-header">
                        <p className="card-title">Tổng quan lượt khám</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={overviewData}>
                                <defs>
                                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip cursor={false} formatter={(value) => `${value} lượt`} />
                                <XAxis dataKey="name" stroke={theme === "light" ? "#475569" : "#94a3b8"} tickMargin={6} />
                                <YAxis stroke={theme === "light" ? "#475569" : "#94a3b8"} tickFormatter={(value) => `${value} lượt`} tickMargin={6} />
                                <Area type="monotone" dataKey="total" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Bệnh nhân mới */}
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Bệnh nhân mới</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((patient) => (
                            <div key={patient.id} className="flex items-center justify-between gap-x-4 py-2 pr-2">
                                <div className="flex items-center gap-x-4">
                                    <img src={patient.image} alt={patient.name} className="size-10 flex-shrink-0 rounded-full object-cover" />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">{patient.name}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{patient.email}</p>
                                    </div>
                                </div>
                                <p className="font-medium text-slate-900 dark:text-slate-50">Phí: ${patient.total}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Danh sách dịch vụ phổ biến */}
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
                                    <img src={doctor.image} alt={doctor.name} className="size-14 rounded-lg object-cover" />
                                    <div className="flex flex-col">
                                        <p>{doctor.name}</p>
                                        <p className="font-normal text-slate-600 dark:text-slate-400">{doctor.email}</p>
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
