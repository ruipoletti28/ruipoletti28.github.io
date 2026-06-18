import { useLocale } from "../../i18n/useLocale";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-600">
      © {year} - {t.footer}
    </footer>
  );
}
