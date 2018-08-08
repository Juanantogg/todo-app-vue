const app = new Vue({
  el: '#appVue',
  data: {
    list: [],
    newTask: '',
  },
  methods: {
    addTask: function () {
      if (this.newTask === '') {
        alert('Ingresa una tarea')
      } else {
        this.list.push({
          task: this.newTask,
          completed: false
        })
      }
      this.newTask = ''
    },
    removeTask: function (i) {
      this.list.splice(i, 1)
    }
  },
  computed: {
    completadas () {
      return this.list.map(el => el.completed).filter(el => el === true).length
    },
    pendientes () {
      return this.list.map(el => el.completed).filter(el => el === false).length
    }
  }
})