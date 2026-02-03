import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/leads")
      .then((res) => setLeads(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-4 md:p-8">

      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Marketing Dashboard
        </h2>
        <p className="text-gray-400 mt-2">
          Lead performance across business verticals
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Chart Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Lead Score by Vertical
          </h3>

          <div className="h-65">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leads}>
                <XAxis 
                  dataKey="vertical" 
                  stroke="#9CA3AF"
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar 
                  dataKey="score" 
                  radius={[8, 8, 0, 0]}
                  fill="#3B82F6"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Card (Optional but recommended) */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Total Leads
            </h3>
            <p className="text-4xl font-bold text-blue-400">
              {leads.length}
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            Data updates automatically from the lead engine API.
          </div>
        </div>

      </div>
    </div>
  );
}
