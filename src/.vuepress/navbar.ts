import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "标签",
    icon: "icon-tag",
    link: "/tag"
  },
  {
    text: "随笔",
    icon: "icon-pencil",
    link: "/note"
  },
  {
    text: "笔记",
    icon: "icon-layers",
    prefix: "/study",
    children: [
      {
        text: '前端',
        icon: 'icon-shenjing',
        link: '/front-end'
      },
      {
        text: '运维',
        icon: 'icon-yunwei-yunweirizhi',
        link: '/运维'
      },
    ]
  },
  {
    text: "日志",
    icon: "icon-doc",
    link: "/daily",
  },
  {
    text: "软件",
    icon: "icon-drgspingtairuanjianxitong28",
    prefix: "/software",
    children: [
      {
        text: 'obsidian',
        icon: 'icon-md',
        link: '/obsidian'
      }
    ]
  }
]);
