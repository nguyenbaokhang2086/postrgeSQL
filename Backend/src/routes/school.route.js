import express from "express";
import {
  createUserHandler,
  createCourseHandler,
  enrollHandler,
  getUserTranscriptHandler,
  deleteCourseHandler,
  removeUserFromCourseHandler,
  deleteUserHandler,
} from "../controllers/school.controller.js";

const router = express.Router();

router.post("/users", createUserHandler);
router.post("/courses", createCourseHandler);

// Đăng ký: POST /api/school/enroll
// Body: { "userId": 1, "courseId": 10 }
router.post("/enroll", enrollHandler);

// Hủy đăng ký (Xóa khỏi khóa học): POST /api/school/unenroll
// Body: { "userId": 1, "courseId": 10 }
router.post("/unenroll", removeUserFromCourseHandler);

// Xem thời khóa biểu: GET /api/school/users/1
router.get("/users/:id", getUserTranscriptHandler);

router.delete("/courses/:id", deleteCourseHandler);
router.delete("/users/:id", deleteUserHandler);

export default router;