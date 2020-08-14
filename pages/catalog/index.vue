<template>
  <div class="catalog-page">
     <div class="container">
        <div class="row">
          <aside class="col-md-4">
            <toggle-menu header="Категории" :items="sortedCategories" urlPrefix="/catalog/" />
          </aside>
          <div class="col-md-8">
            <div class="catalog-page__content">
              <h1>Catalog page</h1>
              <div v-if="params.cat"><b>Категория</b>: {{ params.cat }}</div>
              <div v-if="params.subcat"><b>Подкатегория</b>: {{ params.subcat }}</div>
              <div v-if="params.subsubcat"><b>Подподкатегория</b>: {{ params.subsubcat }}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ToggleMenu from '~/components/ToggleMenu.vue'

export default {
  components: {
    ToggleMenu,
  },
  async created() {
    if( !this.categories || !this.categories.length) {
      await this.$store.dispatch('catalog/getCategories')
    }
  },
  computed: {
    ...mapGetters('catalog', [
      'sortedCategories',
    ]),
    params() {
      return this.$route.params
    },
    categories() {
      return this.$store.state.catalog.categories
    },
  },
}
</script>
