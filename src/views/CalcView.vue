<template>
  <div class="about">
    <TheCalculator title="Vue Invoice Calc"/>
  </div>
</template>

<script>
export default {
  name: 'CalcView',
  components: {
    TheCalculator: () => import('../components/TheCalculator.vue')
  }
}
</script>
