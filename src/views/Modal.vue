<template lang="">
    <div>
        <b-row>
            <b-col v-for="(user, i) in users" :key="i">
                <b-button class="my-5" v-b-modal="`my-modal${i}`">Cliente {{ user.idUsuarios }}</b-button>
                <!-- The modal -->
                <b-modal centered :id='`my-modal${i}`' :title="`${user.nombre} ${user.apellido}`" ok-only>
                    <b-img center :src="user.img" rounded="circle" alt="Circle image"></b-img>
                    <b-list-group class="my-2">
                        <b-list-group-item variant="success"><strong>ID del cliente:</strong> {{ user.idUsuarios }}
                        </b-list-group-item>
                        <b-list-group-item variant="info"><strong>R.U.N del cliente:</strong> {{ user.run }}
                        </b-list-group-item>
                    </b-list-group>
                </b-modal>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            users: this.$store.state.users
        }
    },
}
</script>
<style lang="">
    
</style>