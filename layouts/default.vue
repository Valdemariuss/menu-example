<template>
  <div class="main-layout">
    <header class="main-layout__header">
      <div class="container">
        <main-menu />
      </div>
    </header>
    <main class="main-layout__main">
      <slot>
        <nuxt/>
      </slot>
    </main>
    <footer class="main-layout__footer">
      <div class="container">
        Footer
      </div>
    </footer>
    <client-only>
      <notifications group="all" position="bottom right" />
      <notifications group="once" position="bottom right" :max="1" />
    </client-only>
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
