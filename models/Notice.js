import mongoose from "mongoose";

// Counter Schema
const counterSchema = mongoose.Schema({
  _id: { type: String, required: true }, // Unique ID to identify the counter, like 'notice_sn'
  sequence_value: { type: Number, required: true }, // Holds the last incremented value
  lastUpdated: { type: String, required: true }, // Date in YYYY-MM-DD format
});

// Counter Model
const Counter = mongoose.model('Counter', counterSchema);

// Notice Schema
const noticeSchema = mongoose.Schema({
  notice_sn: { // Auto-incrementing serial number field
    type: Number,
    unique: true,
  },
  notice_title: {
    type: String,
    required: true,
  },
  notice_uploadedBy: {
    type: String,
    required: true,
  },
  notice_detail: {
    type: String,
    required: true,
  },
  notice_file: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Notice Model
const Notice = mongoose.model('Notice', noticeSchema);
export {Notice, Counter}