import { ArrowLeft, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef7f4] to-[#faf8f2] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-10"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="mt-2 text-gray-600">
            Start planning amazing family trips
          </p>
        </div>

        {/* FORM */}
        <div className="mt-10 space-y-6">

          {/* FULL NAME */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-4 rounded-full border border-gray-200 bg-[#fffaf6]
                         focus:outline-none focus:ring-2 focus:ring-[#4FA389]"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-5 py-4 rounded-full border border-gray-200 bg-[#fffaf6]
                         focus:outline-none focus:ring-2 focus:ring-[#4FA389]"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-5 py-4 rounded-full border border-gray-200 bg-[#fffaf6]
                           focus:outline-none focus:ring-2 focus:ring-[#4FA389]"
              />
              <Eye
                size={20}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            </div>
          </div>

          {/* CREATE ACCOUNT BUTTON */}
          <button  className="w-full bg-[#4FA389] text-white py-4 rounded-full text-lg font-medium hover:opacity-90 transition mt-6">
            Create Account
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login-email")}
            className="text-[#4FA389] font-medium cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
