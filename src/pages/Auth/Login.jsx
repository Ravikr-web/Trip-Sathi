import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef7f4] to-[#faf8f2] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SECTION */}
        <div className="text-center md:text-left">
          <img
            src="https://img.freepik.com/premium-photo/professional-family-vacation-cartoon-vector_1027230-23830.jpg?w=2000"
            alt="Trip Sathi"
            className="mx-auto md:mx-0 mb-6 w-64"
          />

          <h1 className="text-3xl font-bold text-gray-900">
            Trip Sathi
          </h1>

          <p className="mt-3 text-gray-600 max-w-md">
            Plan stress-free family trips across India with kid-friendly
            and elder-friendly picks.
          </p>

          <p className="mt-4 text-sm text-gray-500 max-w-md">
            Designed for Indian families: budgets, food preferences,
            walking comfort and more are built into every plan.
          </p>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full mx-auto">
          <button
      onClick={() => navigate("/login-email")}
      className="w-full flex items-center justify-center gap-3 bg-[#4FA389] text-white py-3 rounded-full font-medium hover:opacity-90 transition">
      <Mail size={18} />
      Continue with Email
    </button>

          {/* OR DIVIDER */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="grid grid-cols-2 gap-4">
            <button className="border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5"
              />
              Google
            </button>

            <button className="border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/511330/apple-173.svg"
                alt="Apple"
                className="w-5"
              />
              Apple
            </button>
          </div>

          {/* FOOTER TEXT */}
          <p className="text-center text-sm text-gray-500 mt-6">
            New here?{" "}
            <span onClick={() => navigate("/signup")}  className="text-[#4FA389] font-medium cursor-pointer">
              Create an account
            </span>
          </p>

          <p className="text-center text-xs text-gray-400 mt-2">
            We plan trips — we don't spam.
          </p>
        </div>
      </div>
    </div>
  );
}
