<template>
  <!-- <div class="event-card">
    <div>
      <form @submit.prevent="getWeather">
        <v-text-field label="City" v-model="city" prepend-icon="mdi-account-circle" />

        <v-btn type="submit" >Show</v-btn>
      </form>
    </div>

    <div>
      <h5>Weather in {{ city }}</h5>
      <h4>Temp: {{ temp }} C</h4>
      <h5>{{ weather }}</h5>
      <img :src="icon" />
      <h5>Humidity: {{ humidity }} %</h5>
      <h5>Wind speed: {{ wind_speed }} m/s</h5>
    </div>
  </div> -->

<div class="event-card">

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          <h1>{{ city }}</h1>
        </v-list-item-title>
        <v-list-item-subtitle>{{ weather }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="display-3"
          cols="6"
        >
         <h2> {{ temp }} &deg;C</h2>
        </v-col>
        <v-col cols="6">
          <v-img
            :src="icon"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ wind_speed }} m/s</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ humidity }}%</v-list-item-subtitle>
    </v-list-item>

</div>



</template>

<script>
import axios from "axios";

export default {
  name: "CurrentWeather",
  data() {
    return {
      isLoading: true,
      weather: "",
      icon: "",
      temp: "",
      humidity: "",
      wind_speed: "",
      city: "",
    };
  },
  created() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&APPID=ebcfb6ea0b80cf761513c092d3a61c14"
      )
      .then(({ data }) => {
        this.weather = data.weather[0].description;
        this.icon =
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png";
        this.temp = data.main.temp.toFixed(0);
        this.humidity = data.main.humidity;
        this.wind_speed = data.wind.speed.toFixed(1);
        this.city = data.name;
        this.isLoading = false;
      });

    
  },
  watch: {
    city: function () {
      console.log(this.city);
      this.getWeather();
    }
  },
  methods: {
    getWeather() {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.city +
            "&units=metric&APPID=ebcfb6ea0b80cf761513c092d3a61c14"
        )
        .then(({ data }) => {
          this.weather = data.weather[0].description;
          this.icon =
            "http://openweathermap.org/img/wn/" +
            data.weather[0].icon +
            "@2x.png";
          this.temp = data.main.temp.toFixed(0);
          this.humidity = data.main.humidity;
          this.wind_speed = data.wind.speed.toFixed(1);
          this.city = data.name;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.event-card {
  align-items: center;
  border-radius: 25px;
  width: 20em;
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
.event-card h2 {
  font-size: 3em;
  color: #3b3e41;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
</style>
