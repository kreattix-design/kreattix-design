// vite.config.ts
import react from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/@vitejs/plugin-react/dist/index.mjs";
import CleanCss from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/clean-css/index.js";
import scss from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/rollup-plugin-scss/index.cjs.js";
import { defineConfig } from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///Users/prince.patel/Demos/packages/kreattix-design/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { mkdirSync, writeFileSync } from "node:fs";
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
    }),
    scss({
      sourceMap: true,
      failOnError: true,
      output: async function(styles) {
        const dirname = "dist/css/";
        mkdirSync(dirname, { recursive: true });
        writeFileSync(dirname + "kreattix-design.css", styles);
        const compressed = new CleanCss().minify(styles).styles;
        writeFileSync(dirname + "kreattix-design.min.css", compressed);
      }
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
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcHJpbmNlLnBhdGVsL0RlbW9zL3BhY2thZ2VzL2tyZWF0dGl4LWRlc2lnblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ByaW5jZS5wYXRlbC9EZW1vcy9wYWNrYWdlcy9rcmVhdHRpeC1kZXNpZ24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ByaW5jZS5wYXRlbC9EZW1vcy9wYWNrYWdlcy9rcmVhdHRpeC1kZXNpZ24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgQ2xlYW5Dc3MgZnJvbSAnY2xlYW4tY3NzJ1xuaW1wb3J0IHNjc3MgZnJvbSAncm9sbHVwLXBsdWdpbi1zY3NzJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IEVzTGludCBmcm9tICd2aXRlLXBsdWdpbi1saW50ZXInXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuY29uc3QgeyBFc0xpbnRlciwgbGludGVyUGx1Z2luIH0gPSBFc0xpbnRcbmltcG9ydCB7IG1rZGlyU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ25vZGU6ZnMnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzQ29uZmlnUGF0aHMoKSxcbiAgICBsaW50ZXJQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogWycuL3NyY30vKiovKi57dHMsdHN4LGpzLGpzeH0nXSxcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxuICAgIH0pLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qJ10sXG4gICAgfSksXG4gICAgc2Nzcyh7XG4gICAgICBzb3VyY2VNYXA6IHRydWUsXG4gICAgICBmYWlsT25FcnJvcjogdHJ1ZSxcbiAgICAgIG91dHB1dDogYXN5bmMgZnVuY3Rpb24gKHN0eWxlcykge1xuICAgICAgICBjb25zdCBkaXJuYW1lID0gJ2Rpc3QvY3NzLydcbiAgICAgICAgbWtkaXJTeW5jKGRpcm5hbWUsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgICAgIHdyaXRlRmlsZVN5bmMoZGlybmFtZSArICdrcmVhdHRpeC1kZXNpZ24uY3NzJywgc3R5bGVzKVxuICAgICAgICBjb25zdCBjb21wcmVzc2VkID0gbmV3IENsZWFuQ3NzKCkubWluaWZ5KHN0eWxlcykuc3R5bGVzXG4gICAgICAgIHdyaXRlRmlsZVN5bmMoZGlybmFtZSArICdrcmVhdHRpeC1kZXNpZ24ubWluLmNzcycsIGNvbXByZXNzZWQpXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBlbnZQcmVmaXg6ICdLUkVBVFRJWCcsXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZSgnc3JjJywgJ2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAna3JlYXR0aXgtZGVzaWduJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxPQUFPLFdBQVc7QUFDMVYsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sbUJBQW1CO0FBRTFCLFNBQVMsV0FBVyxxQkFBcUI7QUFDekMsU0FBUyxlQUFlO0FBRnhCLElBQU0sRUFBRSxVQUFVLGFBQWEsSUFBSTtBQUtuQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxlQUFlO0FBQUEsRUFDMUMsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLDZCQUE2QjtBQUFBLE1BQ3ZDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3ZDLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxVQUFVO0FBQUEsSUFDdEIsQ0FBQztBQUFBLElBQ0QsS0FBSztBQUFBLE1BQ0gsV0FBVztBQUFBLE1BQ1gsYUFBYTtBQUFBLE1BQ2IsUUFBUSxlQUFnQixRQUFRO0FBQzlCLGNBQU0sVUFBVTtBQUNoQixrQkFBVSxTQUFTLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFDdEMsc0JBQWMsVUFBVSx1QkFBdUIsTUFBTTtBQUNyRCxjQUFNLGFBQWEsSUFBSSxTQUFTLEVBQUUsT0FBTyxNQUFNLEVBQUU7QUFDakQsc0JBQWMsVUFBVSwyQkFBMkIsVUFBVTtBQUFBLE1BQy9EO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTO0FBQUEsSUFDakM7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
