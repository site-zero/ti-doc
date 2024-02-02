import { defineClientConfig } from "@vuepress/client";
import {
  BUS_KEY,
  I18n,
  I18nSet,
  MessageMap,
  TiAppEvent,
  createBus,
  en_us,
  updateInstalledComponentsLangs,
  zh_cn
} from "@site0/tijs";
import { provide } from "vue";
import "@site0/tijs/style.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    //
    // 准备多国语言
    //
    let cn = zh_cn as MessageMap;
    let en = en_us as MessageMap;
    console.log(cn);
    const app_i18ns = {
      zh_cn: cn,
      en_us: en,
      zh_hk: cn,
      en_uk: en
    } as I18nSet;
    let lang = "zh-cn";
    let langKey = I18n.toLangKey(lang);
    I18n.putAll(app_i18ns[langKey]);
    updateInstalledComponentsLangs(langKey);

    //
    // 全局消息总线
    //
    let bus = createBus<TiAppEvent>();
    provide(BUS_KEY, bus);
  },
  rootComponents: []
});
