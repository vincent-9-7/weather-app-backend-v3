const mongosse = require('mongoose');
const validateEmail = function (email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailFormat.test(email)
};

const userSchema = new mongosse.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            validate: [validateEmail, 'Please fill a valid email address. '],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        ID: {
            type: Number,
            unique: true,
            required: true,
            min: 0,
        },
        location: {
          type: String,
          trim: true,
          required: true
        }
})

const userTable = mongosse.model('weatherapp-user', userSchema);
module.exports = userTable;