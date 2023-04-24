import { createI18n } from 'vue-i18n';
import en from './en';

const messages = {
  en,
};

const i18n = new createI18n({
  legacy: false,
  locale: 'en', // 设置地区
  messages, // 设置地区信息
});

export default i18n;
