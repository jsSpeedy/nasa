const { notFound } = require("next/navigation");
const { getRequestConfig } = require("next-intl/server");

const locales = ["en", "tr"];

module.exports = getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
