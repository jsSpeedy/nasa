import GlobalStyle from "../../components/atoms/GlobalStyles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2({ subsets: ["latin"] });

export const metadata = {
  title: "NASA",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={exo_2.className}>
        <GlobalStyle />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
