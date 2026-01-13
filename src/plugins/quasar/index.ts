// Import icon libraries
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css';
import '@quasar/extras/eva-icons/eva-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';
import '@quasar/extras/line-awesome/line-awesome.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css';
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css';
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css';
import '@quasar/extras/mdi-v7/mdi-v7.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/themify/themify.css';

// Import Quasar css
import { Cookies, Dialog, Loading, Notify } from 'quasar';
import quasar_lang from 'quasar/lang/pt-BR';
import 'quasar/src/css/index.sass';

export const quasar_options = {
  plugins: {
    Notify,
    Cookies,
    Dialog,
    Loading,
  },
  lang: quasar_lang,
    animation: 'all',
    extras: ['material-icons', 'mdi', 'fontawesome-v6'],
    framework: {
        iconSet: 'fontawesome-v6'
    }
};
