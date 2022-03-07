import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { idUsuarios: 40, run: "2.612.787-4", nombre: 'Azahara', apellido: 'Cuadrado', img:'https://randomuser.me/api/portraits/men/1.jpg'},
      { idUsuarios: 21, run: "12.581.827-7", nombre: 'Cesar', apellido: 'Ropero', img:'https://randomuser.me/api/portraits/men/2.jpg'},
      { idUsuarios: 89, run: "31.759.012-1", nombre: 'Maite', apellido: 'Galán', img:'https://randomuser.me/api/portraits/women/3.jpg'},
      { idUsuarios: 38, run: "15.368.901-6", nombre: 'Eusebio', apellido: 'Prat', img:'https://randomuser.me/api/portraits/men/4.jpg'},
      { idUsuarios: 66, run: "28.400.529-5", nombre: 'Bárbara', apellido: 'de Salazar', img:'https://randomuser.me/api/portraits/women/5.jpg'},
      { idUsuarios: 54, run: "37.439.082-1", nombre: 'María Del Carmen', apellido: 'de Vallejo', img:'https://randomuser.me/api/portraits/women/6.jpg'},
      { idUsuarios: 91, run: "36.456.896-7", nombre: 'Juan Antonio', apellido: 'Barros', img:'https://randomuser.me/api/portraits/men/7.jpg'},
      { idUsuarios: 77, run: "3.756.832-5", nombre: 'Modesta', apellido: 'Gómez-Amaya', img:'https://randomuser.me/api/portraits/women/8.jpg'},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
