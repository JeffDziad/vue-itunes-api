<script>
export default {
  name: "tv-episodeCard",
}
</script>

<script setup>
import {TvShow} from "@/models/Media";
import {computed} from "vue";

const props = defineProps({
  item: {
    type: TvShow
  }
});

const img = computed(() => {
  if(props.item.hasOwnProperty("artworkUrl100")) {
    return props.item.artworkUrl100;
  } else {
    return "";
  }
});
</script>

<template>
  <h5 class="card-title">{{item.trackName}}</h5>
  <h6 class="card-subtitle">{{item.artistName}}</h6>
  <br>
  <img :src="img" alt="Artwork"/>
</template>

<style scoped>

</style>