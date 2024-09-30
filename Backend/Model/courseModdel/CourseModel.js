const courseSchema = new Schema({
    coursetitle: {
        type: String,
        required: true,
    },
    coursetype: {
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
    totalfee: {
        type: Number,
        required: true,
    },
    semesterfee: {
        type: Number,
        required: true,
    },
    university: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts', // Assuming this is the name of your university model
        required: true,
    }
});

module.exports = mongoose.model("CourseModel", courseSchema);
