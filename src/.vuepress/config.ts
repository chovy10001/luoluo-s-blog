import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "luoluo",
  description: "luoluo 's blog",
  // 加载网络图片配置
  head: [
    [
      "meta",
      {
        name: "referrer",
        content: "no-referrer"
      }
    ],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
