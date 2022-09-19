const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TimeSheetSchema = new Schema({
  user: String,
  description: String,
  line_items: [{ date: String, time: Number }],
});

const TimeSheet = mongoose.model("TimeSheet", TimeSheetSchema);

module.exports = TimeSheet;
