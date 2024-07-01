import { useTranslations } from "next-intl";
import MainLayout from "/src/layout/MainLayout";

export default function About() {
  const t = useTranslations();
  const headers = t.raw("headers");

  return (
    <main>
      <MainLayout>
        {t("pages.about")}
        {headers.map((item, index) => (
          <div key={index}>
            <a href={item.href}>
              <i className={`icon-${item.icon}`}></i>
              {item.title}
            </a>
          </div>
        ))}
      </MainLayout>
    </main>
  );
}
