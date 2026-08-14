import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    base: "/a2rp-test/",

    build: {
        minify: "esbuild",
        sourcemap: false,
    },
});
