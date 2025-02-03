const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    ProductImg: { type: String, trim: true },
    adminid: { type: String, trim: true },
    Shopkeeperid: { type: String, trim: true },
    title: { type: String, required: [true, "Please provide the Name"], trim: true },
    description: { type: String, required: [true, "Please provide the Des"], trim: true },
    cateogry: { type: String,enum:['men','women','kids','old'], required: [true, "Please provide the cata"], trim: true },
    rating: { type: Number, required: false, trim: true },
    numberofRating: { type: Number, required: false, trim: true },
    size: { type: String,enum:['Wide','Narrow','Medium','ExtraWide'], required: [true, "Please provide the cata"], trim: true },
    Price: { type: Number, required: false, trim: true },
    isdeleted: { type: Boolean, default: false }


}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)






