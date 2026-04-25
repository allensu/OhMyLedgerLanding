import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizedPath(lang: Lang, path: string = ''): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (lang === defaultLang) return clean ? `/${clean}` : '/';
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}
