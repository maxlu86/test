<template>
  <div>
    <h1>Dashboard</h1>
    <template>
      <CurrentWeather />
      <CatsByBreed />}
    </template>
  </div>
</template>

<script>

import CurrentWeather from "../components/CurrentWeather";
import CatsByBreed from "../components/CatsByBreed";

export default {
  components: { CurrentWeather, CatsByBreed },
};
</script>
