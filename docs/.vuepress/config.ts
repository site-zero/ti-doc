import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

import sidebar from "./sidebar";

export default defineUserConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/ti-logo2.png",
    navbar: [
      {
        text: "首页",
        link: "/"
      }
    ],
    sidebar
  })
});
