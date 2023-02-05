import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/build-webpack.config";
import { IBuildEnv, IBuildPaths } from "./config/build/types/config";

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const PORT = env.port || 3000;
  const MODE = env.mode || "development";
  const isDev = MODE === "development";

  const config: Configuration = buildWebpackConfig({
    mode: MODE,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
