<template>
  <div>User {{ $route.params.id }}</div>
</template>

<script>
export default {
  mounted() {
    console.log("1");
    // console.log("$route", this.$route.params.id);
  }
};
</script>

<style></style>
