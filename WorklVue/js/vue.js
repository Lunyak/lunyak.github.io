const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});

const cars = [
  car('Ford', 'Focus', 'Max', ' 2016', '+7 921 123 34 34', 'img/focus.jpg'),
  car('Ford', 'Mondeo', 'Vladinir', ' 2019', '+7 921 003 34 00', 'img/mondeo.jpg'),
  car('Porshe', 'Panamera', 'Irina', ' 2014', '+7 921 180 11 16', 'img/panamera.jpg')
]

let app = new Vue({
  el: '#app',
  data: {
    cars: cars,
    car: cars[0],
    selectedCarIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false
  },
  methods: {
    selectCar: function(index) {
      this.car = cars[index],
      this.selectedCarIndex = index
    }
  },

  computed: {
    phoneBtnText() {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone'
    },
    filteredCars() {
      return this.cars.filter(car => {
        return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
      })
    }
  }
})
