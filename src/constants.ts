import i18n from './i18n';

export type DROPDOWN_OPTION = {
  label: string;
  value: string;
};

export const LOCALES: DROPDOWN_OPTION[] = [
  {
    label: i18n.t('userProfile.portuguese'),
    value: 'pt-PT',
  },
  {
    label: i18n.t('userProfile.english'),
    value: 'en-UK',
  },
];

export const THEMES: DROPDOWN_OPTION[] = [
  {
    label: i18n.t('userProfile.dark'),
    value: i18n.t('userProfile.dark'),
  },
  {
    label: i18n.t('userProfile.light'),
    value: i18n.t('userProfile.light'),
  },
];
