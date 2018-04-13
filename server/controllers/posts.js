import HandBoxModel from '../db/schema/handbox';
import PmArticle from '../db/schema/article';
import util from 'util';


module.exports = {
    "GET /api/posts": async ctx => {
        
        
        let resCode,
            message;
      
        try {
            let pmlist = await HandBoxModel.find(null,'sid',function(err,data){
                if(err){
                    console.log(`Error ${err}`);
                }
                
            });
            resCode = 200,
            message = pmlist;
            
        } catch (e) {
            resCode = 500;
            message = "错误";
            console.log(e);
        }
        // console.log(pmlist);
      ctx.response.body = {
        resCode,
        message
      };
    },
    "POST /api/handlist": async ctx => {
        
        const { handboxname } = ctx.request.body;
        let resCode,
            message;
      
        try {
            let pmlist = await HandBoxModel.find({'sid':handboxname},'pm',function(err,data){
                if(err){
                    console.log(`Error ${err}`);
                }
                
            });
            resCode = 200,
            message = pmlist;
            
        } catch (e) {
            resCode = 500;
            message = "错误";
            console.log(e);
        }
        // console.log(pmlist);
      ctx.response.body = {
        resCode,
        message
      };
    },
    "POST /api/pmarticle": async ctx => {
        
        const { aid } = ctx.request.body;
        let resCode,
            message;
      
        try {
            let pmlist = await PmArticle(aid).find(function(err,data){
                if(err){
                    console.log(`Error ${err}`);
                }
                
            });
            resCode = 200,
            message = pmlist;
            
        } catch (e) {
            resCode = 500;
            message = "错误";
            console.log(e);
        }
      ctx.response.body = {
        resCode,
        message
      };
    },
    "POST /api/pmnamefromaid": async ctx => {
        const { name } = ctx.request.body;
        let resCode,
            message;
        try {
            let pmlist = await HandBoxModel.findOne({'pm.pmNameCN':name},{'pm.allPmId':1,'pm.pmNameCN.$':1, _id:0},function(err,data){
                if(err){
                    console.log(`Error ${err}`);
                }
            });
            resCode = 200,
            message = pmlist;
            
        } catch (e) {
            resCode = 500;
            message = "错误";
            console.log(e);
        }
        // console.log(pmlist);
      ctx.response.body = {
        resCode,
        message
      };
    },
}