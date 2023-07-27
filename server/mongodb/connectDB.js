import mongoose from "mongoose";

export const commectDB=()=>{
const url="mongodb+srv://satymkog:SatyamLA2711@cluster0.mboq9qh.mongodb.net/desireAI?retryWrites=true&w=majority";
mongoose.set('strictQuery',true);
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection success')
}).catch((err)=>{console.log(err)});
}
//satymkog
//SatyamLA2711