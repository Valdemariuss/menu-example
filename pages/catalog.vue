<template>
  <div class="catalog-page">
     <div class="container">
        <div class="row">
          <aside class="col-md-4">
            <toggle-menu header="Категории" :items="categories" :opens="openCategories" @on-toggle="onToggle" urlPrefix="/catalog/" />
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
import { mapGetters, mapMutations } from 'vuex'

import ToggleMenu from '~/components/ToggleMenu.vue'

export default {
  components: {
    ToggleMenu,
  },
  computed: {
    params() {
      return this.$route.params
    },
    categories() {
      return this.$store.state.catalog.categories
    },
    openCategories() {
      return this.$store.state.catalog.openCategories
    },
  },
  methods: {
    ...mapMutations('catalog', [
      'TOGGLE_CATEGORIES_OPEN_BY_ID',
    ]),
    onToggle(catId) {
      this.TOGGLE_CATEGORIES_OPEN_BY_ID(catId)
    },
  }
}
</script>
