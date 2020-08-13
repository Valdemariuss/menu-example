<template>
  <ul class="catalog-menu">
    <li v-for="item in items" class="catalog-menu__item" :key="item.path">
      <nuxt-link class="catalog-menu__link" :to="'/catalog/' + item.path">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>

const items = [
  { title: 'Кабель и провод', path: 'kabel-i-provod' },
  { title: 'Электромонтажные изделия', path: 'elektromontazhnye-izdeliya' },
  { title: 'Кабель гибкий', path: 'kabel-i-provod/kabel-gibkiy' },
  { title: 'Колонны', path: 'elektromontazhnye-izdeliya/metallicheskie-kabelenesuschie-sistemy/kolonny' },
]

export default {
  data: () => ({
    items: items,
  }),
}
</script>
