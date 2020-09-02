const mongoose = require("mongoose");
const Post = mongoose.model("Post");

module.exports = (req, res) => {
    Post.find({})
    .exec((err, data) => {
        if(err)
        {
            res.status(500).json({err});
        }
        else res.status(200).json({data});
    });
}