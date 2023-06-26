import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": ['/note/', '/daily/',
  ],
  "/study/front-end/": [
  {
    text: '前端',
    icon: 'icon-shenjing',
    children: "structure"
    },
  ],
  "/software/": "structure",
});
