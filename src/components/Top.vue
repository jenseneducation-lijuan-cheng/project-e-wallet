<template>
  <div class="header">
    <span>{{ headline }}</span>
  </div>
</template>

<script>
export default {
  props: {
    headline: String
  }
};
</script>
<style scoped>
.header {
  margin-top: 20px;
}
.header span {
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 30px;
}
</style>