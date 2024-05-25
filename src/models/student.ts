//student.ts
import { Schema, model } from 'mongoose';

interface IStudent {
  name: string;
  email: string;
  dateOfJoining: string;
  enrollmentNumber: string;
  phoneNumber: string;
  profilePicture: string;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateOfJoining: { type: String, required: true },
  enrollmentNumber: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  profilePicture: { type: String, required: true }
});

const Student = model<IStudent>('Student', studentSchema);

export default Student;
