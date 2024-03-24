module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8090", 
        ws: false, 
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }, 
      },
    },
  },
};
