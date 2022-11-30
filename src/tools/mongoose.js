module.exports = {
    multipleMongooseObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    mongooseObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
