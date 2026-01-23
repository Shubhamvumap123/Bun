import path from "node:path";
import { fileURLToPath } from "node:url";
import CompressionPlugin from "compression-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: "production",
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		// Gzip compression
		new CompressionPlugin({
			algorithm: "gzip",
			test: /\.(js|css|html|svg)$/,
      threshold: 0,
      minRatio: Infinity,
		}),
		// Brotli compression
		new CompressionPlugin({
			algorithm: "brotliCompress",
			test: /\.(js|css|html|svg)$/,
			filename: "[path][base].br",
      threshold: 0,
      minRatio: Infinity,
		}),
	],
};
