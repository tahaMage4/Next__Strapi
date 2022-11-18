module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ur"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/success",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
