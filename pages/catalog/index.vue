<template>
  <div>
    <portal to="aside" :slim="true">
      <catalog-menu />
    </portal>

    <h1>Catalog page</h1>
    <div v-if="params.cat"><b>Категория</b>: {{ params.cat }}</div>
    <div v-if="params.subcat"><b>Подкатегория</b>: {{ params.subcat }}</div>
    <div v-if="params.subsubcat"><b>Подподкатегория</b>: {{ params.subsubcat }}</div>
  </div>
</template>

<script>
import CatalogMenu from '~/components/catalog/CatalogMenu.vue'

export default {
  layout: "aside",
  components: {
    CatalogMenu,
  },

  computed: {
    params() {
      return this.$route.params
    }
  }
}
</script>
