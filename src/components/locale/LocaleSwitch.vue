<template>
 <section class="section-first container">
    <div class="row">
        <div class="col-md-12">
            <label>{{ $t("changeLocale.label") }}</label>
            <select name="" id="" class="form-control" @change="switchLanguage($event)">
                <option value="">Select language</option>
                <option v-for="(locale,key) in locales" :selected="selectedLocale == locale.localeKey" :key="key" :value="locale.localeKey">{{ locale.localeName }}</option>               
            </select>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 menus">
            <router-link to='/signin'>Login</router-link>
            <router-link to='/signup'>Register</router-link>
        </div>
    </div>

 </section>
</template>

<script>
import i18n from '@/i18n'
import locales from '../../config/locales'
export default {
    name: 'LocaleSwitch', 
    data(){
        return {
            locales: locales
        }
    },
    methods: {
        switchLanguage : function( e ) {
            i18n.locale = e.target.value
            this.$store.dispatch('setLocale', e.target.value)
        },
        getSelectedLocale: function() {
            return this.$store.getters.getLocale;
        }
    },

    computed: {
        selectedLocale : function() {
            return this.getSelectedLocale();
        }
    },

    beforeMount() {
        i18n.locale = this.getSelectedLocale();
    }
}
</script>

<style scoped>
.section-first{
    margin-bottom: 40px;
}
.menus a {
    display: inline-block;
    padding: 4px;
}
</style>