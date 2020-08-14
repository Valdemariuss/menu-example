<template>
  <div :class="classPrefix" >
    <strong :class="classPrefix + '__hd'" v-if="header">{{ header }}</strong>
    <ul :class="classPrefix + '__ul'">
      <li v-for="item in items" :class="classPrefix + '__item'" :key="item.url">
        <nuxt-link :class="classPrefix + '__link'" :to="urlPrefix + item.url">{{ item.name }}
          <span  v-if="item.childs && item.childs.length" :class="[classPrefix + '__toggle', {'--open': opensState[item.category_id] }]" @click.prevent.stop="toggle(item.category_id)"><i>></i></span>
        </nuxt-link>
        <toggle-slide>
          <toggle-menu v-if="item.childs && item.childs.length && opensState[item.category_id]"
            :items="item.childs"
            :opens="opensState"
            :urlPrefix="urlPrefix" classPrefix="toggle-menu-sub"
            :class="{'--open': opensState[item.category_id] }"
            @on-toggle="toggleEmit"
            />
        </toggle-slide>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'toggle-menu',
  props: {
    header: '',
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
    opens: {
      type: Object,
      default: () => {
        return {}
      }
    },
    urlPrefix: '',
    classPrefix: {
      type: String,
      default: () => {
        return 'toggle-menu'
      }
    },
  },
  data: () => ({
    opensState: {},
  }),
  created() {
    this.opensState = Object.assign({}, this.opens)
  },
  methods: {
    toggle(id) {
      this.$set(this.opensState, id, !this.opensState[id])
      this.toggleEmit(id)
    },
    toggleEmit(id) {
      this.$emit('on-toggle', id)
    }
  },
}
</script>
