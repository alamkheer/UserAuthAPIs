import mongoose from 'mongoose';

const db = mongoose.createConnection(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

export default db;