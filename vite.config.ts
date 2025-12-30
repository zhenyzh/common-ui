import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            exclude: ["src/env.ts", "src/**/*.stories.ts"],
        }),
        cssInjectedByJsPlugin(),
    ],

    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, "src/index.ts"),
                components: path.resolve(__dirname, "src/components/index.ts"),
                icons: path.resolve(__dirname, 'src/assets/icons/index.ts'),
            },
            name: "common-ui",
            formats: ["es", "cjs"],
            fileName: (format, entryName) =>
                `${entryName}.${format === "es" ? "es" : "cjs"}.js`
        },
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
});
