<template>
  <nav class="main-menu">
    <nuxt-link v-for="item in items" class="main-menu__item" :to="item.path" :key="item.path">{{ item.title }}</nuxt-link>
  </nav>
</template>

<script>

const items = [
  { title: 'Home', path: '/' },
  { title: 'Catalog', path: '/catalog' },
]

export default {
  data: () => ({
    items: items,
  }),
}
</script>
