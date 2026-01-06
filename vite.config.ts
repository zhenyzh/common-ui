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
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: "common-ui",
            formats: ['es', 'cjs', 'umd'],
            fileName: format => `index.${format}.js`,
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
