/* eslint-disable no-undef */
import { defineConfig } from "vite";
import { config } from "dotenv";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env": process.env,
  },
});
