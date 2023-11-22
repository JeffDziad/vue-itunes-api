<script>
import BookCard from "@/components/BookCard.vue";
import MovieCard from "@/components/feature-movieCard.vue";
import SongCard from "@/components/SongCard.vue";
import AudiobookCard from "@/components/AudiobookCard.vue";
import PodcastCard from "@/components/PodcastCard.vue";
import TvShowCard from "@/components/tv-episodeCard.vue";
import tvEpisodeCard from "@/components/tv-episodeCard.vue";
import featureMovieCard from "@/components/feature-movieCard.vue";

export default {
  name: "LibraryItemCard",
  components: {BookCard, featureMovieCard, AudiobookCard, SongCard, PodcastCard, tvEpisodeCard},
  props: {
    item: {
      type: Object,
    }
  },

  // functions that you want to use in your view that are triggered manually
  computed: {
    cardType() {
      if(this.item.hasOwnProperty("kind")) {
        return this.item.kind + "Card";
      } else {
        return this.item.wrapperType + "Card";
      }

    }
  },
}
</script>

<template>
  <div class="card h-100">
    <div class="card-body"><div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    </div>
      <component :is="cardType" :item="item"></component>
    </div>

    <div class="card-footer d-flex justify-content-between">
      <button @click="$emit('remove')" class="btn btn-outline-danger">Remove</button>
      <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<style scoped>

</style>