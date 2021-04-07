<template>
  <div class="event-card">
    <v-app>
      <v-main>
        <v-container>

          <v-layout align-center justify-center>       
            <v-select :items="breeds"
                  item-text="name"
                  v-model="selected_breed"
                  label="Breeds"
                  return-object
                  attach></v-select>
          </v-layout>

          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in images"
              :key="i"
              :src="item.url"
            >
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CatsByBreed",

  data() {
    return {
      images: [],
      breeds: [],
      selected_breed: {},
      current_image: {},
    };
  },
  created() {
    this.getBreeds();
  },
  watch: {
    selected_breed: function () {
      console.log(this.selected_breed);
      this.getImages();
    },
  },
  methods: {
    async getBreeds() {
      try {
        axios.defaults.headers.common["x-api-key"] =
          "3304fb5b-ecb5-4744-891a-8052de013c41";

        let response = await axios.get("https://api.thecatapi.com/v1/breeds/");
        this.breeds = response.data;
        console.log(
          "-- (" + this.breeds.length + ") Breeds from TheCatAPI.com"
        );

        // pick one to display initially
        this.selected_breed = this.breeds[10];
      } catch (err) {
        console.log(err);
      }
    },
    async getImages() {
      try {
        let query_params = {
          breed_ids: this.selected_breed.id,
          limit: 8,
        };

        let response = await axios.get(
          "https://api.thecatapi.com/v1/images/search",
          { params: query_params }
        );

        this.pagination_count = response.headers["pagination-count"];
        this.images = response.data;
        this.current_image = this.images[0];

        console.log(
          "-- (" + this.images.length + ") Images from TheCatAPI.com"
        );
        console.log(this.pagination_count, "images available for this query.");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.event-card {
  align-items: center;
  border-radius: 25px;
  width: 40em;
  margin: 1em auto 1em auto;
  padding: 1em;
  border: solid 1px #2c3e50;
  cursor: pointer;
  transition: all 0.2s linear;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card h4 {
  font-size: 1.4em;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
</style>
