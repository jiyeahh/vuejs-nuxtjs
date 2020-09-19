<template>
  <v-layout column justify-center align-center>
    <v-card>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ query }}'s weather
          </v-list-item-title>
          <v-list-item-subtitle>{{
            new Date() | moment('calendar')
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-list-item>
          <v-list-item-icon>
            <img :src="`https://openweathermap.org/img/wn/${weather}.png`" />
          </v-list-item-icon>
          <v-col class="display-2" cols="10">
            {{ temperature.temp }} &deg;C
          </v-col>
        </v-list-item>

        <v-list-item
          >&nbsp;&nbsp;&nbsp;&nbsp;
          <v-list-item-icon>
            <v-icon>mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-col class="display-1" cols="10">{{ wind.speed }} km/h</v-col>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import axios from 'axios'
import constants from '@/config/constants'

export default {
  data() {
    return {
      API_KEY: constants.WEATHER_API_KEY,
      URL_BASE: 'http://api.openweathermap.org/data/2.5/',
      query: 'Seoul',
      temperature: [],
      wind: [],
      weather: [],
    }
  },
  created() {
    axios
      .get(
        `${this.URL_BASE}weather?q=${this.query}&units=metric&appid=${this.API_KEY}`
      )
      .then((res) => {
        this.temperature = res.data.main
        this.wind = res.data.wind
        this.weather = res.data.weather[0].icon
      })
  },
  methods: {},
}
</script>

<style></style>
