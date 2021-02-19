
const { server, router } = require('kuaizi')

function checkLogin(handler, ctx){
  let loginState = 通过某种方法获取登录状态()
  if(loginState)
    return handler(ctx)
  else
    return '未登录'
}

router.addHandler({
  path: '/user',
  breadList: [checkLogin],
  handler(ctx){
    let param = ctx.getParam()
    return `你想获取 id 为 ${ param.id } 的用户的信息`
  }
})

server.start(8888)

function 通过某种方法获取登录状态(){
  return false
}