import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import process from "process";

export default ({ mode }) => {
  // charge .env, .env.production, etc + process.env
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return defineConfig({
    plugins: [react()],
    define: {
      "process.env": {
        ...env, //merge all env
      },
    },
  });
};
