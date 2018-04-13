import mongoose, { Schema } from 'mongoose';

/**
 * 文章模型
 * @param {String} main 主要信息
 * @param {String} megaMain 主要信息mega版
 * @param {String} skill 技能信息
 * @param {String} game 游戏数值信息
 * */

 const ArticleSchema = new Schema(
     {
         _id: Schema.Types.ObjectId,
         main: {},
         megaMain: {},
         skill:{},
         game:{}
     });


function SelectAidArticle(aid) {
    return mongoose.model('pmlist'+aid,ArticleSchema,'pmlist'+aid)
}
 export default function(aid){
    return SelectAidArticle(aid)
 }

