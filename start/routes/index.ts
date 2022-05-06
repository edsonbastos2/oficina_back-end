import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './customers'

Route.get('/', async () => {
  return { hello: 'world' }
})
