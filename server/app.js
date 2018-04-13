import Koa from 'koa';
import Router from 'koa-router';
import parser from 'koa-bodyparser';
import cors from 'koa2-cors';
import path from 'path';
import mongoConnection from './db/connection';
import controller from './middlewares/controller';
import templating from './middlewares/templating';
import koaStaticPlus from 'koa-static-plus';


const app = new Koa();

app
    .use(cors())
    .use(parser())
    
    .use(templating('dist',{
        noCache:!isProduction,
        watch:!isProduction
    }))
    .use(controller());


// const isProduction = process.env.NODE_ENV === 'production';
const isProduction = false;

//static file support:
if(!isProduction){
    app
        .use(koaStaticPlus(path.join(__dirname,'..','/dist'), {
            pathPrefix: '/public'  //路径前缀
        }))
        .use(koaStaticPlus(path.join(__dirname,'..','/src/static/images'), {
            pathPrefix: '/images'  //路径前缀
        }))


}

(async ()=>{
    try{
        await mongoConnection();
    }catch(e){
        console.error('ERROR',e);
        return;
    }

    app.listen(8099,()=>{
        console.log(':8099 server listen');
    })
})();