"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dateOfJoining: { type: String, required: true },
    enrollmentNumber: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    profilePicture: { type: String, required: true }
});
const Student = (0, mongoose_1.model)('Student', studentSchema);
exports.default = Student;
