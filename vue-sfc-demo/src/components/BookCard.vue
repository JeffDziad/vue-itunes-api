<script>
import {Book} from "@/models/Media";

export default {
  name: "BookCard",
  props: {
    item: {
      type: Book,
    }
  },

  // functions that you want to use in your view that are triggered manually
  methods: {},

  // props/data that needs to be calculated when dependencies change
  computed: {},
}
</script>

<template>
  <span>Book</span>
  {{item}}
</template>

<style scoped lang="scss">

</style>