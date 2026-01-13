import { createI18n } from 'vue-i18n';
import { message } from './locales/pt-br';

const i18n = createI18n({
  legacy: false,
  fallbackLocale: ['pt-BR'],
  locale: 'pt-BR',
  globalInjection: true,
  messages: {
    'pt-BR': {
      message: Object.assign(message),
    },
  },
});

export default i18n;
