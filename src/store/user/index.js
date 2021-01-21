export default {

    state: {
        user: false,
        lastPhoneDigits: false
    },

    getters: {
        getLastPhoneDigits: state => state.lastPhoneDigits,
    },

    mutations: {
        setLastPhoneDigits: (state, digits) => { state.lastPhoneDigits = digits }
    },

    actions: {
        setLastPhoneDigits: (context, digits) => { context.commit('setLastPhoneDigits', digits); }
    }
}