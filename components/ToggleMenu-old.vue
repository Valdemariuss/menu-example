<template>
  <ul class="toggle-menu">
    <lh class="toggle-menu__hd" v-if="header">{{ header }}</lh>
    <li v-for="item in items" class="toggle-menu__item" :key="item.url">
      <nuxt-link class="toggle-menu__link" :to="urlPrefix + item.url">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>

export default {
  props: {
    header: null,
    items: [],
    urlPrefix: '',
  },
}
</script>
