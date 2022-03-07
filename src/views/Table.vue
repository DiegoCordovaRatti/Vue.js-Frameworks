<template>
  <div>
    <b-table class="table-info my-3" striped hover :fields="fields" :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: this.$store.state.users,
        fields:[
          { key: 'idUsuarios', label: 'ID del cliente' },
          { key: 'run', label: 'R.U.N.' },
          { key: 'nombre', label: 'Nombre' },
          { key: 'apellido', label: 'Apellido' },
        ]
      }
    },
  }
</script>