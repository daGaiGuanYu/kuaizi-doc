const { server, router } = require('kuaizi')

router.addHandler({
  path: '/hello',
  handler(){
    return 'hi yo~'
  }
})

server.start(8888)