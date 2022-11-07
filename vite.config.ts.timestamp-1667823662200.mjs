// vite.config.ts
import react from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { resolve } from "node:path";
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx,js,jsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ["src/**/*"]
    })
  ],
  envPrefix: "KREATTIX",
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "kreattix-design",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        },
        assetFileNames: (assetInfo) => {
          console.log(assetInfo);
          if (assetInfo.name === "style.css")
            return "custom.css";
          return assetInfo.name;
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcHJpbmNlLnBhdGVsL0RlbW9zL3BhY2thZ2VzL2tyZWF0dGl4LWRlc2lnblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ByaW5jZS5wYXRlbC9EZW1vcy9wYWNrYWdlcy9rcmVhdHRpeC1kZXNpZ24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ByaW5jZS5wYXRlbC9EZW1vcy9wYWNrYWdlcy9rcmVhdHRpeC1kZXNpZ24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgRXNMaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWxpbnRlcidcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5jb25zdCB7IEVzTGludGVyLCBsaW50ZXJQbHVnaW4gfSA9IEVzTGludFxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoY29uZmlnRW52KSA9PiAoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0c0NvbmZpZ1BhdGhzKCksXG4gICAgbGludGVyUGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6IFsnLi9zcmN9LyoqLyoue3RzLHRzeCxqcyxqc3h9J10sXG4gICAgICBsaW50ZXJzOiBbbmV3IEVzTGludGVyKHsgY29uZmlnRW52IH0pXSxcbiAgICB9KSxcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWydzcmMvKiovKiddLFxuICAgIH0pLFxuICBdLFxuICBlbnZQcmVmaXg6ICdLUkVBVFRJWCcsXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZSgnc3JjJywgJ2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAna3JlYXR0aXgtZGVzaWduJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICB9LFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5sb2coYXNzZXRJbmZvKVxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHJldHVybiAnY3VzdG9tLmNzcydcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWVcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxPQUFPLFdBQVc7QUFDMVYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjtBQUUxQixTQUFTLGVBQWU7QUFEeEIsSUFBTSxFQUFFLFVBQVUsYUFBYSxJQUFJO0FBSW5DLElBQU8sc0JBQVEsYUFBYSxDQUFDLGVBQWU7QUFBQSxFQUMxQyxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsTUFDWCxTQUFTLENBQUMsNkJBQTZCO0FBQUEsTUFDdkMsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQUEsSUFDdkMsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFVBQVU7QUFBQSxJQUN0QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTO0FBQUEsSUFDakM7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUU3QixrQkFBUSxJQUFJLFNBQVM7QUFDckIsY0FBSSxVQUFVLFNBQVM7QUFBYSxtQkFBTztBQUMzQyxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
