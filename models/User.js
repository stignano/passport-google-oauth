const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// Load the userSchema into mongoose
mongoose.model("users", userSchema);
