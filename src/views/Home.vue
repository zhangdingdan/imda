<template>
    <div class="home">
        <h1 class="d-flex justify-center my-2">Welcome Siix-AGT!</h1>

        <h2 class="d-flex justify-center my-8">Select Floor</h2>

        <v-flex class="d-flex justify-center"><floorpop /></v-flex>

    </div> 
</template>

<script>
import floorpop from './floorpop'

export default {
    components: { floorpop }
}
</script>
