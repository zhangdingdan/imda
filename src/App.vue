<template>
    <v-app  class="text-uppercase grey--text">
      <Navbar />
      <v-main class="grey lighten-4 mx-4">
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar
  },
  sockets: {
    connect() {
    },
  },
  mounted() {
    this.sockets.subscribe('test1', data => {
      console.log(data)
    })
    this.sockets.subscribe('battery', bat => {
      this.battery = bat;
    });
  },
  data: () => {
    return {
      battery: 100,
      batteryIcon: 'mdi-battery'
    }
  },
};

</script>
