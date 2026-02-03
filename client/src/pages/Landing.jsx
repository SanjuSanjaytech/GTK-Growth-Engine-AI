import { useNavigate, useSearchParams } from "react-router-dom";

export default function Landing() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const vertical = params.get("vertical") || "Business";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Grow Your {vertical}
      </h1>
      <p className="max-w-xl text-center mb-6 text-gray-300">
        Automated ads, daily leads, and real-time growth insights.
      </p>
      <button
        onClick={() => navigate("/lead")}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Get Leads Today
      </button>
    </div>
  );
}
