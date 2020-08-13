<template>
  <default-layout>
    <div class="row">
      <div class="col-md-3">
        <portal-target name="aside" />
      </div>
      <div class="col-md-9">
        <nuxt />
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '~/layouts/default.vue'

export default {
  components: {
    DefaultLayout,
  }
}
</script>
