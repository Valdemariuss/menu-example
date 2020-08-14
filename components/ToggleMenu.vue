<template>
  <div :class="classPrefix" >
    <strong :class="classPrefix + '__hd'" v-if="header">{{ header }}</strong>
    <ul :class="classPrefix + '__ul'">
      <li v-for="item in items" :class="classPrefix + '__item'" :key="item.url">
        <nuxt-link :class="classPrefix + '__link'" :to="urlPrefix + item.url">{{ item.name }}
          <span  v-if="item.childs && item.childs.length" :class="[classPrefix + '__toggle', {'--open': opens[item.category_id] }]" @click.prevent.stop="toggle(item.category_id)"><i>></i></span>
        </nuxt-link>
        <toggle-slide>
          <toggle-menu v-if="item.childs && item.childs.length && opens[item.category_id]" :items="item.childs" :urlPrefix="urlPrefix" classPrefix="toggle-menu-sub" :class="{'--open': opens[item.category_id] }" />
        </toggle-slide>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'toggle-menu',
  props: {
    header: '',
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    urlPrefix: '',
    classPrefix: {
      type: String,
      default: function () {
        return 'toggle-menu'
      }
    },
  },
  data: () => ({
    opens: {},
  }),
  methods: {
    toggle(id) {
      this.$set(this.opens, id, !this.opens[id])
    }
  }
}
</script>
