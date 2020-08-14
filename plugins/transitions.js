import Vue from 'vue'

const time = 300
const transitionName = 'toggle-slide'

Vue.component(transitionName, {
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        name: transitionName,
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          el.classList.add(transitionName)
          el.style.height = '0'
        },
        enter(el, done) {
          const height = parseInt(el.scrollHeight)
          requestAnimationFrame(()=>{
            el.style.height = (height + 'px')
          })
          setTimeout(done, time)
        },
        afterEnter(el) {
          el.style.height = ''
          el.classList.remove(transitionName)
        },
        beforeLeave(el) {
          el.classList.add(transitionName)
        },
        leave(el, done) {
          let height = parseInt(el.scrollHeight)
          requestAnimationFrame(()=>{
            el.style.height = (height + 'px')
          })
          setTimeout(()=>{
            requestAnimationFrame(()=>{
              el.style.height = '0'
            })
          }, 50)
          setTimeout(done, time)
        },
        afterLeave(el) {
          el.style.height = ''
        }
      }
    }

    return createElement('transition', data, context.children)
  }
})
