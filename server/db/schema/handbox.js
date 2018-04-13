import mongoose, { Schema } from 'mongoose';

/**
 * 文章模型
 * @param {String} sid 标题
 * @param {String} pm 内容
 * */

 const HandBoxleSchema = new Schema(
     {
         _id: Schema.Types.ObjectId,
         sid: String,
         pm: [
             {
                allPmId: String,
                tPmId: String,
                img: String,
                pmNameCN: String,
                pmNameJA: String,
                pmNameEN: String,
                tpye: Array
             }
         ]
     });

 export default mongoose.model('pmlist',HandBoxleSchema,'pmlist')

