import { DuelSvg, FunSvg, RankedSvg, TrainingSvg } from '../assets';
import i18n from '../i18n';

export const getCategories = () => [
  { id: '1', title: i18n.t('categories.ranked'), icon: RankedSvg },
  { id: '2', title: i18n.t('categories.duel'), icon: DuelSvg },
  { id: '3', title: i18n.t('categories.fun'), icon: FunSvg },
  { id: '4', title: i18n.t('categories.training'), icon: TrainingSvg },
];
