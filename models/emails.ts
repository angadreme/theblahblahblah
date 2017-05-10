import * as mongoose from 'mongoose';

export interface Emails extends mongoose.Document {
  name: string;
  email: string
}

let emailSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

export default mongoose.model<Emails>('Emails', emailSchema);
