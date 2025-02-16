import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: {
        type: Array,
        required: true
    },
    comments: {
        type: Array,
        required: true
    },
},

{timestamps : true});

const News = mongoose.model("News", NewsSchema);

export default News;