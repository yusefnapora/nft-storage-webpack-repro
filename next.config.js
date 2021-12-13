const { StatsWriterPlugin } = require('webpack-stats-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'webpack-stats.json',
        stats: {
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
          moduleTrace: true,
        }
      })
    );

    return config;
  }
}
