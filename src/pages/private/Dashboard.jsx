import React, { useState } from "react";
import { Users, Eye, FileText, TrendingUp, Calendar, Clock, Activity, BarChart3, Filter, Download, RefreshCw } from "lucide-react";
import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("mingguan");
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const stats = [
    {
      title: "Total Pengunjung",
      value: "12.450",
      icon: Eye,
      desc: "+12% dari bulan lalu",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-indigo-100"
    },
    {
      title: "Artikel Dipublikasikan",
      value: "324",
      icon: FileText,
      desc: "+8 artikel baru",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-pink-100"
    },
    {
      title: "Pengunjung Harian",
      value: "980",
      icon: Users,
      desc: "+5% dari kemarin",
      gradient: "from-green-400 to-green-600",
      bgGradient: "from-green-50 to-emerald-100"
    },
    {
      title: "Growth Traffic",
      value: "+24%",
      icon: TrendingUp,
      desc: "Stabil dalam 7 hari terakhir",
      gradient: "from-orange-400 to-orange-600",
      bgGradient: "from-orange-50 to-amber-100"
    },
  ];

  const weeklyData = [
    { name: "Sen", visit: 320, pageViews: 520 },
    { name: "Sel", visit: 450, pageViews: 680 },
    { name: "Rab", visit: 390, pageViews: 590 },
    { name: "Kam", visit: 520, pageViews: 780 },
    { name: "Jum", visit: 610, pageViews: 920 },
    { name: "Sab", visit: 480, pageViews: 720 },
    { name: "Min", visit: 700, pageViews: 1050 },
  ];
  
  const monthlyData = [
    { name: "Jan", visit: 3200, pageViews: 5200 },
    { name: "Feb", visit: 4500, pageViews: 6800 },
    { name: "Mar", visit: 3900, pageViews: 5900 },
    { name: "Apr", visit: 5200, pageViews: 7800 },
    { name: "Mei", visit: 6100, pageViews: 9200 },
    { name: "Jun", visit: 4800, pageViews: 7200 },
  ];
  
  const trafficSource = [
    { name: "Direct", value: 40, color: "#4f46e5" },
    { name: "Social", value: 25, color: "#06b6d4" },
    { name: "Referral", value: 20, color: "#10b981" },
    { name: "Organic", value: 15, color: "#f59e0b" },
  ];
  
  const recentActivity = [
    { id: 1, user: "Ahmad Rizki", action: "mengomentari artikel", target: "Panduan React untuk Pemula", time: "5 menit yang lalu" },
    { id: 2, user: "Siti Nurhaliza", action: "membagikan", target: "Tips SEO 2023", time: "15 menit yang lalu" },
    { id: 3, user: "Budi Santoso", action: "mendaftar newsletter", target: "-", time: "1 jam yang lalu" },
    { id: 4, user: "Dewi Lestari", action: "mengunduh e-book", target: "Panduan Lengkap CSS", time: "2 jam yang lalu" },
  ];
  
  const topPages = [
    { id: 1, title: "Panduan React untuk Pemula", views: 3240, change: "+12%" },
    { id: 2, title: "Tips SEO 2023", views: 2890, change: "+8%" },
    { id: 3, title: "Tutorial JavaScript Lanjutan", views: 2150, change: "+15%" },
    { id: 4, title: "Panduan Lengkap CSS", views: 1890, change: "-3%" },
    { id: 5, title: "Best Practices UI/UX", views: 1650, change: "+5%" },
  ];
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };
  
  const data = timeRange === "mingguan" ? weeklyData : monthlyData;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Selamat datang kembali! Berikut adalah ringkasan aktivitas terkini.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleRefresh}
            className={`flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all ${isRefreshing ? 'animate-spin' : ''}`}
          >
            <RefreshCw className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">Refresh</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <Download className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-gradient-to-br ${item.bgGradient} border border-gray-100`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{item.title}</p>
                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    {item.value}
                  </h2>
                  <p className="text-sm text-green-600 mt-2 font-medium">{item.desc}</p>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-br ${item.gradient} shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Statistik Pengunjung</h2>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setTimeRange("mingguan")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${timeRange === "mingguan" ? "bg-white shadow-sm text-indigo-600" : "text-gray-600"}`}
              >
                Mingguan
              </button>
              <button
                onClick={() => setTimeRange("bulanan")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${timeRange === "bulanan" ? "bg-white shadow-sm text-indigo-600" : "text-gray-600"}`}
              >
                Bulanan
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorVisit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }} />
              <Area type="monotone" dataKey="visit" stroke="#4f46e5" fillOpacity={1} fill="url(#colorVisit)" strokeWidth={2} />
              <Area type="monotone" dataKey="pageViews" stroke="#06b6d4" fillOpacity={1} fill="url(#colorPageViews)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Sumber Traffic</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={trafficSource}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {trafficSource.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {trafficSource.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                  <span className="text-sm text-gray-600">{source.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-800">{source.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Aktivitas Terkini</h2>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {activity.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">{activity.user}</span> {activity.action} {activity.target !== "-" && <span className="font-medium">{activity.target}</span>}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Halaman Terpopuler</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={page.id} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{page.title}</p>
                    <p className="text-xs text-gray-500">{page.views} views</p>
                  </div>
                </div>
                <div className={`text-sm font-medium ${page.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {page.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}