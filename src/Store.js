import { observable, decorate , computed } from 'mobx'

class Store {
  data = []
filter = ''

handleAdd = (value) => {
this.data = [...this.data, value]
  console.log(this.data)
}
}
decorate(Store , {

data: observable,
filter : observable
})
let store = new Store()

export default store