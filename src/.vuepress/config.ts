import { shikiPlugin } from '@vuepress/plugin-shiki';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// const { path } = require("@vuepress/utils");
import { path } from "@vuepress/utils"
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
  plugins: [
    // 代码高亮
    shikiPlugin({
      theme: "one-dark-pro",
    })
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
