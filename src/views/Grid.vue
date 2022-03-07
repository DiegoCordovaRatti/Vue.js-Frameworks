<template>
    <div>
        <b-container class="bv-example-row my-3">
            <!-- Stack the columns on mobile by making one full-width and the other half-width -->
            <b-row>
                <b-col class="grid-column" cols="2"><b-img class="random-img my-3" :src="this.$store.state.users[0].img" rounded="circle" alt="Responsive image"></b-img></b-col>
                <b-col class="grid-column" cols="2"><b-img class="random-img my-3" :src="this.$store.state.users[1].img" rounded="circle" alt="Responsive image"></b-img></b-col>
                <b-col class="grid-column" cols="8"><b-img class="random-img my-3" :src="this.$store.state.users[2].img" rounded="circle" alt="Responsive image"></b-img></b-col>
            </b-row>

            <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
            <b-row>
                <b-col class="grid-column" cols="4"><b-img class="random-img my-3" :src="this.$store.state.users[3].img" rounded="circle" alt="Responsive image"></b-img></b-col>
                <b-col class="grid-column" cols="4"><b-img class="random-img my-3" :src="this.$store.state.users[4].img" rounded="circle" alt="Responsive image"></b-img></b-col>
                <b-col class="grid-column" cols="4"><b-img class="random-img my-3" :src="this.$store.state.users[5].img" rounded="circle" alt="Responsive image"></b-img></b-col>
            </b-row>

            <!-- Columns are always 50% wide, on mobile and desktop -->
            <b-row>
                <b-col class="grid-column" cols="6"><b-img class="random-img my-3" :src="this.$store.state.users[6].img" rounded="circle" alt="Responsive image"></b-img></b-col>
                <b-col class="grid-column" cols="6"><b-img class="random-img my-3" :src="this.$store.state.users[7].img" rounded="circle" alt="Responsive image"></b-img></b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .grid-column{
        border: 1px solid rgb(128, 128, 128);
        height: 150px;
        padding: 0;
    }
    .random-img{
        object-fit:scale-down;
    }
</style>