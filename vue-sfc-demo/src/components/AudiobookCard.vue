<script>
export default {
  name: "audiobookCard",
}
</script>

<script setup>
import {Audiobook} from "@/models/Media";
import {computed} from "vue";

const props = defineProps({
  item: {
    type: Audiobook
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
  <h5 class="card-title">{{item.collectionName}}</h5>
  <img :src="img" alt="Artwork"/>
</template>

<style scoped>

</style>