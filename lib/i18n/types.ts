export type Locale = 'ar' | 'en';

export type Dict = {
  nav: Record<string, string>;
  common: Record<string, string>;
  home: Record<string, string | string[]>;
  auth: Record<string, string>;
  dashboard: Record<string, string>;
  learn: Record<string, string>;
  quiz: Record<string, string>;
  partner: Record<string, string>;
  footer: Record<string, string>;
};
