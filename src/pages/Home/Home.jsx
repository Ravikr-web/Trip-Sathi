import {
  Home as HomeIcon,
  Map,
  Compass,
  Sparkles,
  User,
  Plus,
  Mic,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef7f4] to-[#faf8f2]">

      {/* NAVBAR */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="bg-[#4FA389] text-white px-2 py-1 rounded-md">
              TS
            </span>
            Trip Sathi
          </div>

          {/* NAV LINKS */}
          <nav className="flex items-center gap-6 text-gray-600">
            <span className="flex items-center gap-2 bg-[#4FA389] text-white px-4 py-2 rounded-full">
              <HomeIcon size={18} /> Home
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <Map size={18} /> Trips
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <Compass size={18} /> Explore
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <Sparkles size={18} /> AI
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <User size={18} /> Profile
            </span>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="text-gray-500">Welcome back</p>
            <h1 className="text-3xl font-bold text-gray-900">
              Plan Your Journey
            </h1>
          </div>

          {/* GREEN CARD */}
          <div className="bg-[#4FA389] rounded-2xl p-8 text-white relative overflow-hidden">
            <h2 className="text-2xl font-semibold max-w-md">
              Plan your entire family trip in minutes
            </h2>
            <p className="mt-3 text-white/90">
              AI-powered itineraries tailored for Indian families
            </p>

            <button className="mt-6 bg-white text-[#4FA389] flex items-center gap-2 px-6 py-3 rounded-full font-medium">
              <Plus size={18} />
              Plan a New Trip
            </button>

            {/* Decorative Circle */}
            <div className="absolute right-0 top-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          </div>

          {/* TAGS */}
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 bg-white rounded-full text-sm shadow">
              👨‍👩‍👧‍👦 Family-friendly
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm shadow">
              🥗 Veg-aware
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm shadow">
              👴 Senior-safe
            </span>
          </div>

          {/* AI SUGGESTION */}
          <div className="bg-white rounded-2xl p-6 flex items-center justify-between shadow">
            <div className="flex items-center gap-4">
              <div className="bg-[#4FA389]/10 p-3 rounded-xl">
                <Sparkles className="text-[#4FA389]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Not sure where to go?
                </h3>
                <p className="text-gray-600 text-sm">
                  Let AI find the perfect destination for you
                </p>
              </div>
            </div>
            <ArrowRight className="text-gray-400" />
          </div>

          {/* VOICE BUTTON */}
          <button className="flex items-center gap-3 border px-6 py-3 rounded-xl bg-white">
            <Mic className="text-[#4FA389]" />
            Plan by voice
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-900">
            Recent Trips
          </h3>

          <div className="bg-white rounded-2xl p-8 text-center shadow">
            <p className="text-gray-600 font-medium">No trips yet</p>
            <p className="text-sm text-gray-500 mt-2">
              Start planning your first family adventure!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
