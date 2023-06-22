import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "luoluo",
  description: "luoluo 's blog",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
