import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'CustomersController').apiOnly().middleware({
  index:['acl:admin'],
  store:['acl:admin'],
  update:['acl:admin'],
  destroy:['acl:admin'],
  show:['acl:admin']
})
