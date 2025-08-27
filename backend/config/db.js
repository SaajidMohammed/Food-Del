import mongoose  from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://saajidmohammed6:MdSaajid0005@cluster0.igotk1v.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

