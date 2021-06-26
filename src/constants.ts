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

export const MONTHS_WITH_THIRTY_DAYS = [4, 6, 9, 11];

export const MONTH_WITH_LESS_THAN_THIRTY_DAYS = 2;
