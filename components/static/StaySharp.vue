<template lang='pug'>
section.bg-wrapper(v-once)
  .body
    h2.title Stay sharp
    p.lead New topics every week so you can sharpen your skills and deepen your understanding of Vue.js and its ecosystem of tools.
    .actions
      nuxt-link.button.modern.border.-small.-plain(to='/courses') Latest courses
</template>

<script>
export default {
  name: 'level-up'
}
</script>


<style lang='stylus' scoped>
section.bg-wrapper
  background linear-gradient(0deg, #B5FFDA 3.85%, #8CE5CE 13.14%, #23A4B1 33.95%, #008EA7 40.76%, #0087A0 43.73%, #00516A 69.85%, #003049 89.38%, #00233C 100%)
  background-attachment scroll
  height 520px
  margin-top -2px
  z-index 3
  display flex
  justify-content center

  +desktop-up()
    height 720px

  &:before
    background-image url(/images/stay-sharp/middle.svg)
    background-size 100% auto
    background-position center bottom 15px

  &:after
    background-image url(/images/stay-sharp/foreground.svg)
    background-size 100% auto

  +mobile-only()
    &:before,
    &:after
      background-size 800px auto

.body
  position absolute
  text-align center
  display flex
  flex-direction column
  align-items center
  color #fff
  z-index 3
  width 100%
  max-width 430px
  padding 0 30px
  top 60px

  @media screen and (min-width: 50em)
    width 310px
    max-width 50%
    padding-left 9%
    box-sizing content-box
    top 16%
    left 50%

.title
  margin-bottom 0
  font-size 2rem

  +desktop-up()
    font-size 2.5rem

.lead
  font-size: 1rem
  line-height: 1.3rem
</style>
