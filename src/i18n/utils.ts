import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const stripped = url.pathname.startsWith(base)
    ? url.pathname.slice(base.length)
    : url.pathname;
  const [, maybeLang] = stripped.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function localizedPath(lang: Lang, path: string = ''): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (lang === defaultLang) return clean ? withBase(clean) : withBase('');
  return clean ? withBase(`${lang}/${clean}`) : withBase(`${lang}/`);
}
