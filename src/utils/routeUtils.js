import { pathnames } from "../config";

export function getLocalizedPath(currentPath, newLocale) {
  // Önce mevcut yolu parçalara ayırıyoruz
  const pathParts = currentPath.split("/").filter(Boolean);
  const currentLocale = pathParts[0];

  // Eğer mevcut yol kök dizin ise, sadece yeni locale'i döndürüyoruz
  if (pathParts.length === 1) {
    return `/${newLocale}`;
  }

  // Yolun geri kalanını alıyoruz
  const restOfPath = pathParts.slice(1).join("/");

  // pathnames nesnesinde eşleşen bir giriş arıyoruz
  for (const [key, value] of Object.entries(pathnames)) {
    if (typeof value === "object") {
      const currentLocalePath = value[currentLocale];
      if (currentLocalePath === `/${restOfPath}`) {
        // Eşleşme bulundu, yeni locale için yolu döndürüyoruz
        return `/${newLocale}${value[newLocale]}`;
      }
    }
  }

  // Eşleşme bulunamadıysa, varsayılan olarak kök dizine yönlendiriyoruz
  return `/${newLocale}`;
}
