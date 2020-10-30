const withImages = require('next-images')
// module.exports = withImages()

module.exports = 
    withImages(),
    {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
    // webpack(config) {
    //     config.module.rules.push({
    //       test: /\.svg$/,
    //       issuer: {
    //         test: /\.(js|ts)x?$/,
    //       },
    //       use: ['@svgr/webpack'],
    //     });
    
    //     return config;
    //   },
      
  }
  