<template>
  <div class="container main-layout">
    <header class="main-layout__header">
      <main-menu />
    </header>
    <main class="main-layout__main">
      <slot>
        <nuxt/>
      </slot>
    </main>
    <footer class="main-layout__footer">footer</footer>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    MainMenu,
  }
}
</script>
