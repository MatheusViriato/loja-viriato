var apiURL = 'https://loja-viriato.herokuapp.com/api'

var app = new Vue({
  el: '#content',
  data: {
    label_search: "Todos os produtos",
    products: null,
    category: null,
    limit: 1,
    count: 0
  },
  created: function () {
    var xhr = new XMLHttpRequest()
    var self = this
    xhr.open('GET', apiURL)
    xhr.onload = function () {
      self.products = JSON.parse(xhr.responseText)
    }
    xhr.send()
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      self.category = this.$refs.categoryField.value
      if(self.category != '') {
        apiURL = apiURL + '/category/?category=' + self.category
      } else {
        apiURL = 'https://loja-viriato.herokuapp.com/api'
        self.category = "Todos os produtos"
      }
        
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        self.products = JSON.parse(xhr.responseText)
        if(self.products.length === 0) self.label_search = "Categoria não encontrada"
        else self.label_search = self.category
      }
      xhr.send()
    },
    selectNumberProducts: function (){
      console.log(this.$refs.numberProductField.value)
    },
    incrementCounter: function (){
      var self = this
      self.count++
      console.log(self.count)
    }
  }
})