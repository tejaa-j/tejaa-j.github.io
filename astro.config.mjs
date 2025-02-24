import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

const LIVE_URL = "https://tejaa-j.github.io/";
// https://tejaa-j.github.io/
export default defineConfig({
  site: "https://tejaa-j.github.io/",
  integrations: [react(), tailwind(), icon()],
});
