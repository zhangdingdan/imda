<template>
     <nav>
        <v-app-bar app flat>
            <span class="font-weight-light" bold>SIIX </span>
            <span class="amber--text" bold>AGT</span>

            <v-spacer></v-spacer>
            <v-btn :to="{name:'Home'}" id="home" text color="indigo">
                <v-icon>mdi-home</v-icon>
                <span>HOME</span>
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn :to="{name:'User'}" id="user" text color="indigo">
                <v-icon>mdi-account</v-icon>
                <span>USER</span>
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn :to="{name:'Map'}" id="map" text color="indigo">
                <v-icon>mdi-map</v-icon>
                <span>MAP</span>
            </v-btn>
            <v-spacer></v-spacer>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    }
    
}
</script>