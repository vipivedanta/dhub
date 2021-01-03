export default {
    state: {
        locale: ( localStorage.getItem('dhub_locale') != null ) ? localStorage.getItem('dhub_locale') : 'en'
    },

    getters: {
        getLocale: (state) => state.locale
    },

    mutations: {
        setLocale: ( state, locale ) => { 
            state.locale = locale;
            localStorage.setItem('dhub_locale', locale )
        }
    },

    actions: {
        setLocale: ( context, locale ) => { context.commit('setLocale', locale ) }
    }
}