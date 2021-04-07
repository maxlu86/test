module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'http://api.openweathermap.org/',
}
};
