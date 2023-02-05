import { ResolveOptions } from "webpack";
import { IBuildOptions } from "./types/config";

export const buildResolvers = ({
  paths: { src },
}: IBuildOptions): ResolveOptions => ({
  extensions: [".tsx", ".ts", ".js"],
  preferAbsolute: true,
  modules: [src, "node_modules"],
  mainFiles: ["index"],
  alias: {},
});
