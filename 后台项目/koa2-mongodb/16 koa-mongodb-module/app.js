var router=require('koa-router')(),
    Koa = require('koa');
var admin=require('./routes/admin.js');
var api=require('./routes/api.js');
const app = new Koa()

router.get('/', async ( ctx ) => {
    ctx.body="这是首页"
})
// /admin 配置子路由  层级路由
router.use('/admin',admin.routes());
router.use('/api',api);//在模块里面暴露路由并且启动路由

app.use(router.routes());//启动路由
app.use(router.allowedMethods());//官方推荐用法，可以看到router.allowedMethods()用了路由匹配router.routes之后，所以在当所有路由中间件最后调用，此时滚据ctx.status设置response响应头
app.listen(3000,function() {
    console.log("localhost:3000");
})

