import api from '@services/TodoApiService'

api.getTodos().then((response) => {
  console.log(response.data)
})
