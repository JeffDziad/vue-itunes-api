<script>
import {Movie} from "@/models/Media";

export default {
  name: "feature-movieCard",
  props: {
    item: {
      type: Movie,
    }
  },

  // functions that you want to use in your view that are triggered manually
  methods: {},

  // props/data that needs to be calculated when dependencies change
  computed: {
    img() {
      if(this.item.hasOwnProperty("artworkUrl100")) {
        return this.item.artworkUrl100;
      } else {
        return "";
      }
    }
  }
}
</script>

<template>
  <h5 class="card-title">{{item.trackName}}</h5>
  <img :src="img" alt="Artwork"/>
</template>

<style scoped>

</style>