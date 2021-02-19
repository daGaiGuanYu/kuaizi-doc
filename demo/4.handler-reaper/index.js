const { server, router } = require('kuaizi')

function checkLogin(handler, ctx){
  console.log('检查登录状态')
  return handler(ctx)
}

function checkAdmin(handler, ctx){
  console.log('检查用户角色')
  return handler(ctx)
}

function checkAAdmin(handler, ctx){
  console.log('检查高级管理员')
  return handler(ctx)
}

const reap = new router.HandlerReaper({
  path: '/user',
  breadList: [checkLogin, checkAdmin]
})

reap({
  handler(ctx){
    let param = ctx.getParam()
    return `你想获取 id 为 ${ param.id } 的用户的信息`
  }
})

reap({
  method: 'post',
  async handler(ctx){
    let data = await ctx.getJson()
    return {
      msg: '你似乎上传了一个用户的数据',
      data: data
    }
  }
})

reap({
  method: 'delete',
  breadList: [checkAAdmin],
  handler(ctx){
    let param = ctx.getParam()
    return `你想删除 id 为 ${ param.id } 的用户的信息`
  }
})

server.start(8888)