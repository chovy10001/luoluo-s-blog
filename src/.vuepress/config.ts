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
    }),
    [
      'player',
      {
        //网易云单个歌单id
        songIds: ['29723011', '1887893189', '1421069053'],
        //网易云歌单
        playlist: '2410215112',
        showPlaylist: true,
        //是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接
        disabledNetEaseMusic: true,

        //请求接口的baseURL
        serverUrl: 'http://localhost:3000',

        //本地歌曲
        localSongs: {
          coverUrl: './public/assets/images/home/me.jpg',
          songs: [
            // {
            //   path: '/song/1.mp3',
            //   songName: '12',
            //   cover: 'https://p1.music.126.net/Rg1x9LeUacIDqtvUzL35Cw==/109951163688517312.jpg'
            // },
            // {
            //   path: 'http://m7.music.126.net/20211120155029/f99e2fe5f557455fd37b7bfd0c0d6c3e/ymusic/545a/005e/025f/c03ab3077e74b9d50e07557d82ca472b.flac',
            //   songName: '23',
            //   cover: 'https://p2.music.126.net/8mnn6YiQldsRIHe_nER8wg==/109951162894925733.jpg'
            // },
            {
              path: '/assets/music/4278268329.mp3',
              songName: '寂寞暴走'
            },
          ]
        }
      }
    ]
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
