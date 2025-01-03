/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes").light,
          primary: "#1565c0",
          secondary: "#9c27b0",
          accent: "#00a3ff",
          neutral: "#242424",
          "base-100": "#fffdfa",
          info: "#0288d1",
          success: "#2e7d32",
          warning: "#ff9800",
          error: "#d32f2f",
          "--rounded-box": "12px", // border radius rounded-box 实用类，用于卡片和其他大盒子
          "--rounded-btn": "4px", // border radius rounded-btn 实用类, 用于按钮和类似的元素
          "--rounded-badge": "1.9rem", // border radius rounded-badge 实用类, 用于徽章等
          "--tab-radius": "4px", // border radius of tabs
        }
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes").dark,
          primary: "#90caf9",
          secondary: "#ce93d8",
          accent: "#22d3ee",
          neutral: "#808080",
          "base-100": "#0f1214",
          "base-200": "#bdbdbd",
          "base-300": "#616161",
          info: "#29b6f6",
          success: "#81c784",
          warning: "#f57c00",
          error: "#f44336",
          "--rounded-box": "12px", // border radius rounded-box 实用类，用于卡片和其他大盒子
          "--rounded-btn": "4px", // border radius rounded-btn 实用类, 用于按钮和类似的元素
          "--rounded-badge": "1.9rem", // border radius rounded-badge 实用类, 用于徽章等
          "--tab-radius": "4px", // border radius of tabs
        }
      }
    ]
  },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")]
}
