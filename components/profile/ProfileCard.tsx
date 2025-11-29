"use client";

import { Mail, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { FaFigma, FaGithub, FaLinkedinIn } from "react-icons/fa";

export function ProfileCard() {
  const [isDark, setIsDark] = useState(true);

  const theme = {
    dark: {
      bg: "bg-gray-900",
      card: "bg-gray-800",
      text: "text-white",
      muted: "text-gray-400",
      border: "border-gray-700",
      header: "from-gray-800 to-gray-900",
      buttonPrimary: "from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700",
      buttonSecondary: "from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400",
      skill: "bg-gray-700",
    },
    light: {
      bg: "bg-white",
      card: "bg-white",
      text: "text-gray-900",
      muted: "text-gray-600",
      border: "border-gray-200",
      header: "from-blue-50 to-indigo-50",
      buttonPrimary: "from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-900",
      buttonSecondary: "from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400",
      skill: "bg-gray-100",
    },
  };

  const t = isDark ? theme.dark : theme.light;

  return (
    <div
      className={`w-full max-w-md ${t.card} rounded-2xl overflow-hidden shadow-lg border ${t.border} transition-all duration-300`}
    >
      {/* Background Image */}
      <div className={`relative w-full h-40 bg-linear-to-b ${t.header} overflow-hidden`}>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <button
          onClick={() => setIsDark(!isDark)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-lg ${
            isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
          } flex items-center justify-center transition-colors`}
          aria-label="Toggle dark/light mode"
        >
          {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-700" />}
        </button>
      </div>

      {/* Card Content */}
      <div className="px-6 pb-6">
        {/* Profile Section */}
        <div className="flex items-start justify-between -mt-16 mb-4 relative z-10">
          <div className="flex items-end gap-4">
            {/* Profile Image */}
            <div
              className={`w-24 h-24 rounded-full border-4 ${t.card} bg-gray-700 flex items-center justify-center overflow-hidden`}
            >
              <div className="w-full h-full bg-linear-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <img src="/images/profile-pic.jpeg" alt="profile" />
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 pt-2">
            <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
              <Mail size={18} />
            </button>
            <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
              <FaGithub size={18} />
            </button>
            <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
              <FaLinkedinIn size={18} />
            </button>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-2">
          <h2 className={`text-xl font-bold ${t.text}`}>Muhammad Anisuzzaman</h2>
          <p className={`text-sm ${t.muted} font-medium`}>Sr. Software Engineer</p>
        </div>

        {/* Location */}
        <div className={`flex items-center gap-1 mb-4 text-sm ${t.muted}`}>
          <span>📍</span>
          <span>Road 17, Adabor, Dhaka 1207</span>
        </div>

        {/* Bio */}
        <p className={`text-sm ${t.muted} mb-5 leading-relaxed`}>
          Trying to make an impact through design and nocode tools.... open to working on new projects, let{"'"}s
          connect
        </p>

        {/* Skills Section */}
        <div className="mb-5">
          <h3 className={`text-sm font-bold ${t.text} mb-3`}>Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-full text-xs font-medium">
              Website Design & Development
            </span>
            <span className="px-3 py-1 bg-linear-to-r from-pink-600 to-rose-600 text-white rounded-full text-xs font-medium">
              Project Management
            </span>
            <span className="px-3 py-1 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs font-medium">
              Team Lead
            </span>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-5">
          <h3 className={`text-sm font-bold ${t.text} mb-3`}>Technology & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <div
              className={`flex items-center gap-2 text-sm ${t.muted} hover:${
                isDark ? "text-white" : "text-gray-900"
              } transition-colors`}
            >
              <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <FaFigma size={14} className="text-white" />
              </div>
              <span>Figma</span>
            </div>
            <div
              className={`flex items-center gap-2 text-sm ${t.muted} hover:${
                isDark ? "text-white" : "text-gray-900"
              } transition-colors`}
            >
              <div className="w-5 h-5 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">Fr</span>
              </div>
              <span>Framer</span>
            </div>
            <div
              className={`flex items-center gap-2 text-sm ${t.muted} hover:${
                isDark ? "text-white" : "text-gray-900"
              } transition-colors`}
            >
              <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <span>Blender</span>
            </div>
          </div>
        </div>

        {/* Rate Section */}
        <div className="mb-5">
          <h3 className={`text-sm font-bold ${t.text} mb-3`}>Rate</h3>
          <div className="flex gap-3">
            <span className={`px-3 py-1 ${t.skill} ${t.muted} rounded text-xs font-medium`}>25 - 50$/hr</span>
            <span className={`px-3 py-1 ${t.skill} ${t.muted} rounded text-xs font-medium`}>$500/project</span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-6">
          <h3 className={`text-sm font-bold ${t.text} mb-3`}>Experience</h3>
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-sm font-semibold ${t.text}`}>Sr. Software Engineer</p>
                <div className={`flex items-center gap-2 text-xs ${t.muted} mt-1`}>
                  <span className="w-4 h-4 bg-gray-700 rounded flex items-center justify-center">🔷</span>
                  <span>ROOTDEVS</span>
                </div>
              </div>
              <span className={`text-xs ${t.muted}`}>2023-2025</span>
            </div>
            <p className={`text-xs ${t.muted}`}>(3 years)</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            className={`flex-1 px-4 py-2 rounded-lg bg-linear-to-r ${t.buttonPrimary} text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg`}
          >
            View Profile
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-lg bg-linear-to-r ${t.buttonSecondary} text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg`}
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
