const { server, router } = require('kuaizi')

router.addHandler({
  path: '/user',
  handler(ctx){
    let param = ctx.getParam()
    return `你想获取 id 为 ${ param.id } 的用户的信息`
  }
})

server.start(8888)