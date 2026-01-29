import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EmailLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef7f4] to-[#faf8f2] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">

        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 mb-10"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* CONTENT */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-600">
            Sign in to continue your journey
          </p>
        </div>

        {/* FORM */}
        <div className="mt-10 space-y-6">

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4FA389] bg-[#fffaf6]"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-800">
                Password
              </label>
              <span className="text-sm text-[#4FA389] cursor-pointer">
                Forgot password?
              </span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4FA389] bg-[#fffaf6]"
              />

              {showPassword ? (
                <EyeOff
                  size={20}
                  onClick={() => setShowPassword(false)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                />
              ) : (
                <Eye
                  size={20}
                  onClick={() => setShowPassword(true)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* SIGN IN BUTTON */}
          <button onClick={() => navigate("/home")}
 className="w-full bg-[#4FA389] text-white py-4 rounded-full text-lg font-medium hover:opacity-90 transition mt-6">
            Sign In
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-600 mt-8">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#4FA389] font-medium cursor-pointer"
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}
