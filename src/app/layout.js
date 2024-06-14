import GlobalStyle from "./components/atoms/GlobalStyles";

export const metadata = {
  title: "NASA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
