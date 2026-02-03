import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function LeadForm() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vertical: "Bakery",
    campaign: "Direct"
  });

  // 🔹 Simulate Ad Click via URL params
  useEffect(() => {
    const vertical = searchParams.get("vertical");
    const campaign = searchParams.get("campaign");

    setForm((prev) => ({
      ...prev,
      vertical: vertical || prev.vertical,
      campaign: campaign || "Direct"
    }));
  }, []);

  const submit = async () => {
    await axios.post("http://localhost:5000/api/leads", form);
    alert("Lead submitted successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 
      bg-linear-to-br from-slate-950 via-slate-900 to-black">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl 
        border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Grow Your {form.vertical} Business
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          Campaign: <span className="text-blue-400">{form.campaign}</span>
        </p>

        <input
          className="w-full mb-4 px-4 py-3 rounded-xl bg-black/40 
          border border-white/10 text-white"
          placeholder="Your Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full mb-4 px-4 py-3 rounded-xl bg-black/40 
          border border-white/10 text-white"
          placeholder="Phone Number"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <select
          className="w-full mb-6 px-4 py-3 rounded-xl bg-black/40 
          border border-white/10 text-white"
          value={form.vertical}
          onChange={(e) => setForm({ ...form, vertical: e.target.value })}
        >
          <option className="bg-gray-900">Bakery</option>
          <option className="bg-gray-900">Clothing</option>
          <option className="bg-gray-900">Laundry</option>
        </select>

        <button
          onClick={submit}
          className="w-full py-3 rounded-xl font-semibold text-white
          bg-linear-to-r from-blue-500 to-purple-600"
        >
          Submit Lead
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          No spam. Campaign tracked automatically.
        </p>
      </div>
    </div>
  );
}
