import * as mongoose from 'mongoose';

export interface Language extends mongoose.Document {
  courseId;
  lName;
  icon;
}

let languageSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true
  },
  lName: {
    type: String
  },
  icon: {
    type: String
  }
});

export default mongoose.model<Language>('Language', languageSchema);
