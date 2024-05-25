//app.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', studentRoutes);

const mongoUri = "mongodb+srv://naveen007rko:Kumar007rko@@cluster0.ph6tgvt.mongodb.net/student%20project?retryWrites=true&w=majority";

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const PORT = process.env.PORT || 3002; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
