import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({insertTypesEntry: true}),
    ],

    build: {
        lib: {
            entry: {
                components: path.resolve(__dirname, 'src/components/index.ts'),
                icons: path.resolve(__dirname, 'src/icons/index.ts'),
            },
            name: "common-ui",
            formats: ['es', 'cjs'],
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
