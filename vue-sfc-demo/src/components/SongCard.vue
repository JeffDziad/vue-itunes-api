<script>
export default {
  name: "songCard",
}
</script>

<script setup>
import {Song} from "@/models/Media";
import {computed} from "vue";

const props = defineProps({
  item: {
    type: Song
  }
})

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
