<script>
export default {
  name: "podcastCard",
}
</script>

<script setup>
import {Podcast} from "@/models/Media";
import {computed} from "vue";

const props = defineProps({
  item: {
    type: Podcast
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
  <img :src="img" alt="Artwork"/>
</template>

<style scoped>

</style>