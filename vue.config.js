module.exports = {
  transpileDependencies: ["vuetify"],
  // GitHub Pages 部署时仓库名为 hsk5，生产构建需要此前缀
  // 本地开发时自动使用 /
  publicPath: process.env.NODE_ENV === "production" ? "/hsk5/" : "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  productionSourceMap: false,
};
