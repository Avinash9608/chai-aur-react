/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files
  ],
  darkMode: "class", // Enables dark mode with a "class"
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [], // Add plugins if needed
};
