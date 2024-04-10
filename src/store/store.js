import { createStore } from 'vuex';

import attributes from './modules/attributes';
import combat from './modules/combat';

const store = createStore({
    modules: {
        attributes,
        combat,
    },
})



export default store