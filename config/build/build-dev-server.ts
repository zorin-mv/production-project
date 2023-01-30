import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IBuildOptions } from "./types/config";

export const buildDevServer = ({
  port,
}: IBuildOptions): DevServerConfiguration => ({
  port,
  open: true,
  historyApiFallback: true,
});
