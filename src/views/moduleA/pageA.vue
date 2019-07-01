<template>
  <div>
    <span>这是页面A，跳转到<a href="javascript:void(0)" @click="tapToPageB">页面B</a></span>
  </div>
</template>

<script>
export default {
  name: 'PageA',
  created () {
    console.log('Created: PageA')
  },
  methods: {
    tapToPageB () {
      this.$router.push({
        name: 'PageB'
      })
    }
  }
}
</script>
