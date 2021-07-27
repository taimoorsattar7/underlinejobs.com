require('dotenv').config()

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

const getBuildConfig = () => {
  const path = require('path')
  const postcssPresetEnv = require('postcss-preset-env')
  const postcssPresetEnvOptions = {
    features: {
      'custom-media-queries': true,
      'custom-selectors': true,
    },
  }

  const cssOptions = {
    postcssLoaderOptions: {
      plugins: [postcssPresetEnv(postcssPresetEnvOptions)],
    },
    sassOptions: {
      includePaths: [path.join(process.cwd(), 'scss')],
    },
  }

  const nextConfig = {
    ...cssOptions,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    webpack(config) {
      config.module.rules.push(
        {
          test: /\.svg$/,
          include: path.join(process.cwd(), 'components', 'icon', 'icons'),
          use: [
            'svg-sprite-loader',
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  { removeAttrs: { attrs: '(fill)' } },
                  { removeTitle: true },
                  { cleanupIDs: true },
                  { removeStyleElement: true },
                ],
              },
            },
          ],
        },
        {
          test: /\.md$/,
          use: 'raw-loader',
        }
      )
      return config
    },
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      CLOUDINARY_URL: process.env.CLOUDINARY_URL,
      DB_NAME: process.env.DB_NAME,
      WEB_URI: process.env.WEB_URI,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      EMAIL_FROM: process.env.EMAIL_FROM,
      SESSION_SECRET: process.env.SESSION_SECRET,
    },
  }
  return nextConfig
}

module.exports = (phase) => {
  const shouldAddBuildConfig =
    phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD
  return shouldAddBuildConfig ? getBuildConfig() : {}
}
