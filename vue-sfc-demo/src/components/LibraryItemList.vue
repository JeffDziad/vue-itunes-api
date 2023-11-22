<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie} from "@/models/Media";
import LibraryItemCard from "@/components/LibraryItemCard.vue";
import LibraryCollectionFactory from "@/models/LibraryCollectionFactory";

export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},
  data() {
    return {
      endpoint: "https://itunes.apple.com/search?",
      searchTerm: "",
      library: new LibraryCollection()
          // new LibraryCollection()
          // .addItem(new Book('Hop on Pop', 56))
          // .addItem(new Book('Cat in the Hat', 45))
          // .addItem(new Movie('Oppenheimer', 188))
          // .addItem(new Movie('Titanic', 178)),

      //     [
      //     new LibraryItem(new Book('Hop on Pop', 56)),
      //     new LibraryItem(new Book('Cat in the Hat', 45)),
      //     new LibraryItem(new Movie('Oppenheimer', 188)),
      //     new LibraryItem(new Movie('Titanic', 178)),
      // ]
    }
  },

  // values/bindings passed to this component
  props: {},

  // functions that you want to use in your view that are triggered manually
  methods: {
    getSearchResults() {
      this.library = new LibraryCollection();
      let uri = this.endpoint + new URLSearchParams({
        term: this.searchTerm,
        limit: 25,
      });
      fetch(uri).then(res => res.json())
          .then(d => this.library = LibraryCollectionFactory.createFromiTunesResults(d.results));
    }
  },

  // props/data that needs to be calculated when dependencies change
  computed: {},

}
</script>

<template>
  <div class="row">
    <div class="col-auto">
      <div class="input-group mb-3">
        <input v-model="searchTerm" type="text" class="form-control" placeholder="Search Term" aria-label="Search Term" aria-describedby="button-addon2">
        <button @click="getSearchResults" class="btn btn-primary" type="button" id="button-addon2">Search</button>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="i in library">
      <library-item-card :item="i" @remove="library.removeItem(i)"></library-item-card>
    </div>
  </div>
</template>

<style scoped>

</style>