module.exports = {
  siteName: 'Taxi NL Feko - Scherpe tarieven voor uw taxi - 24/7 Bel 06-39626090',
  siteDescription: "Taxi NL het taxibedrijf in omgeving 's-Heerenberg; luchthavenvervoer, stadtaxi's, zakelijkvervoer. Snel, veilig en comfortabel tegen scherpe tarieven 24/7.",
  siteUrl: 'https://taxi-nl-feko.nl',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-78420534-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
