var apiURL = 'http://localhost:8080/api'


var app = new Vue({
  el: '#content',
  data: {
    label_search: "Todos os produtos",
    products: null,
    all_products: null,
    category: null,
    limit: null,
    count: null,
    page: 1
  },
  created: function () {
    var xhr = new XMLHttpRequest()
    var self = this
    xhr.open('GET', apiURL)
    xhr.onload = function () {
      self.all_products = JSON.parse(xhr.responseText)
      self.products = self.selectNumberProducts()
      self.count = self.all_products.length + " PRODUTOS ENCONTRADOS"
    }
    xhr.send()
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      self.page = 1
      this.$refs.previousPage.disabled = true
      this.$refs.nextPage.disabled = false
      self.category = this.$refs.categoryField.value
      if(self.category != '') {
        xhr.open('GET', apiURL + '/category/?category=' + self.category)
      } else {
      xhr.open('GET', apiURL)
        self.category = "Todos os produtos"
      }
      xhr.onload = function () {
        self.all_products = JSON.parse(xhr.responseText)
        self.products = self.selectNumberProducts()
        if(self.products.length === 0) self.label_search = "Categoria não encontrada"
        else self.label_search = self.category
        self.count = self.all_products.length + " PRODUTOS ENCONTRADOS"
      }
      xhr.send()
    },
    selectNumberProducts: function (){
      var self = this
      self.limit = this.$refs.numberProductField.value
      self.products = Object.entries(self.all_products).slice(0,self.limit).map(entry => entry[1])
      return self.products   
    },
    changePage: function(new_page){
      var self = this
      self.page += new_page
      var perPage = self.limit
      var from = (self.page * perPage) - perPage
      var to = (self.page * perPage)
      this.controlNavigation(self, to)
      self.products = Object.entries(self.all_products).slice(from,to).map(entry => entry[1])
      return self.products 
    },
    controlNavigation: function(self, to){
      if(self.page === 1){
        this.$refs.previousPage.disabled = true
        this.$refs.nextPage.disabled = false
      }
      if(self.page > 1){
        this.$refs.previousPage.disabled = false
      }
      if(Object.entries(self.all_products).slice(to).map(entry => entry[1]).length === 0){
        this.$refs.nextPage.disabled = true
      }
    }
  }
})