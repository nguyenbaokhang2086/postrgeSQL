import React from 'react';
import { Users, BookOpen, GraduationCap, TrendingUp, Activity, ArrowRight, Shield, Star, Bell } from 'lucide-react';

const StatCard = ({ title, value, detail, icon: Icon, colorClass, bgColorClass, borderClass }) => (
  <div className={`bg-white rounded-2xl p-6 border ${borderClass} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}>
    <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-5 transition-all duration-500 group-hover:scale-150 group-hover:opacity-10 ${bgColorClass}`}></div>
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-3xl font-black text-slate-800 tracking-tight">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${bgColorClass} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
    </div>
    <div className="flex items-center text-xs">
      <div className="flex items-center bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold mr-2">
        <TrendingUp className="w-3 h-3 mr-1" />
        {detail.trend}
      </div>
      <span className="text-slate-400 font-medium">{detail.text}</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center">
            System Overview
            <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-md border border-blue-200">
              Live Data
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-1 font-medium">Real-time platform activity and core performance metrics.</p>
        </div>
        <div className="flex items-center space-x-2">
           <button className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-all duration-200">
              <Bell className="w-5 h-5" />
           </button>
           <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center group">
             Generate Report
             <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Users" 
          value="1,248" 
          detail={{ trend: '+12%', text: 'vs last month' }}
          icon={Users}
          colorClass="text-blue-600"
          bgColorClass="bg-blue-600"
          borderClass="border-blue-50"
        />
        <StatCard 
          title="Active Courses" 
          value="42" 
          detail={{ trend: '+3', text: 'new this week' }}
          icon={BookOpen}
          colorClass="text-purple-600"
          bgColorClass="bg-purple-600"
          borderClass="border-purple-50"
        />
        <StatCard 
          title="Total Enrollments" 
          value="8,590" 
          detail={{ trend: '+18%', text: 'vs last month' }}
          icon={GraduationCap}
          colorClass="text-emerald-600"
          bgColorClass="bg-emerald-600"
          borderClass="border-emerald-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <Activity className="w-64 h-64 -mr-20 -mt-20 transform rotate-12" />
          </div>
          
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div>
              <h3 className="text-xl font-black text-slate-800">Registration Activity</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Last 7 Days Performance</p>
            </div>
            <div className="flex bg-slate-50 p-1 rounded-lg border border-slate-100">
               <button className="px-3 py-1 bg-white shadow-sm border border-slate-200 text-xs font-bold rounded-md text-blue-600">Daily</button>
               <button className="px-3 py-1 text-xs font-bold text-slate-400 hover:text-slate-600">Weekly</button>
            </div>
          </div>
          
          <div className="h-64 flex items-end space-x-3 relative z-10">
            {[40, 70, 45, 95, 65, 85, 120].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group/bar">
                <div className="relative">
                  <div 
                    className="bg-blue-600 group-hover/bar:bg-blue-500 rounded-2xl transition-all duration-500 ease-out shadow-lg shadow-blue-500/20 group-hover/bar:shadow-blue-500/40"
                    style={{ height: `${(h / 120) * 100}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-all transform translate-y-2 group-hover/bar:translate-y-0 shadow-lg">
                       {h}
                    </div>
                  </div>
                </div>
                <div className="text-center text-[10px] font-black text-slate-400 mt-4 uppercase tracking-tighter">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 group">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="w-32 h-32 -mr-10 -mt-10" />
             </div>
             <h3 className="text-lg font-bold mb-1 relative z-10">Security Shield</h3>
             <p className="text-blue-300 text-xs mb-6 relative z-10 leading-relaxed font-medium">All systems are operational and encrypted with 256-bit security protocols.</p>
             <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse"></div>
                      <span className="text-xs font-bold">Database Instance</span>
                   </div>
                   <span className="text-[10px] font-black text-emerald-400 uppercase">Secure</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 animate-pulse"></div>
                      <span className="text-xs font-bold">Main API Gateway</span>
                   </div>
                   <span className="text-[10px] font-black text-cyan-400 uppercase">Stable</span>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 group hover:shadow-xl transition-all duration-300">
             <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Premium Status</h3>
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
             </div>
             <div className="flex items-center space-x-4">
                <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                   <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-[85%] rounded-full shadow-sm"></div>
                </div>
                <span className="text-xs font-black text-slate-600 uppercase">85%</span>
             </div>
             <p className="text-[10px] font-bold text-slate-400 mt-4 leading-tight uppercase tracking-widest">Storage capacity remaining on current plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
