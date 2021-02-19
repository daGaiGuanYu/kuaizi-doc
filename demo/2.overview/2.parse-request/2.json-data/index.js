const { server, router } = require('kuaizi')

router.addHandler({
  method: 'post',
  path: '/user',
  async handler(ctx){
    let data = await ctx.getJson()
    return {
      msg: '你似乎上传了一个用户的数据',
      data: data
    }
  }
})

server.start(8888)