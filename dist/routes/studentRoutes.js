"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const router = express_1.default.Router();
router.get('/students', studentController_1.getAllStudents);
router.get('/students/:id', studentController_1.getStudentById);
router.post('/students', studentController_1.createStudent);
router.put('/students/:id', studentController_1.updateStudent);
router.delete('/students/:id', studentController_1.deleteStudent);
exports.default = router;
