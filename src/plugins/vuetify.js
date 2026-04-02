import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import zhHans from "vuetify/lib/locale/zh-Hans";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: "zhHans",
  },
  theme: {
    themes: {
      light: {
        primary: "#1d4ed8",
        secondary: "#0891b2",
        accent: "#7c3aed",
        success: "#059669",
        warning: "#d97706",
        error: "#dc2626",
      },
    },
  },
});
