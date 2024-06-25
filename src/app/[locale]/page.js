import { useTranslations } from "next-intl";
import MainLayout from "/src/layout/MainLayout";

export default function Home() {
  const t = useTranslations();

  // Çeviri verisini doğrudan al
  const headers = t.raw("headers");

  return (
    <main>
      <MainLayout>
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
