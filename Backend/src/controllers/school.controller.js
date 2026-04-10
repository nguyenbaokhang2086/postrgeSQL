import * as service from "../services/course.service.js";
import { getAllUsers } from "../services/user.service.js";

export const createUserHandler = async (req, res) => {
  try {
    const result = await service.createUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    const statusCode = error.code === 'P2002' ? 409 : 500;
    res.status(statusCode).json({ error: error.message });
  }
};

export const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await service.updateUser(id, { name, email });
    res.json(result);
  } catch (error) {
    const statusCode = error.code === 'P2002' ? 409 : 500;
    res.status(statusCode).json({ error: error.message });
  }
};

export const getAllUsersHandler = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCourseHandler = async (req, res) => {
  try {
    const result = await service.createCourse(req.body);
    res.status(201).json(result);
  } catch (error) {
    const statusCode = error.code === 'P2002' ? 409 : 500;
    res.status(statusCode).json({ error: error.message });
  }
};

export const getAllCoursesHandler = async (req, res) => {
  try {
    const courses = await service.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCourseHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, code } = req.body;
    const result = await service.updateCourse(id, { title, code });
    res.json(result);
  } catch (error) {
    const statusCode = error.code === 'P2002' ? 409 : 500;
    res.status(statusCode).json({ error: error.message });
  }
};

// Handler đăng ký: Dùng userId
export const enrollHandler = async (req, res) => {
  try {
    const { userId, courseId } = req.body; // Thống nhất dùng userId
    const result = await service.enrollUserToCourse(userId, courseId);
    res.json({ message: "Enrolled successfully", user: result });
  } catch (error) {
    res.status(500).json({ error: "Cannot enroll user" });
  }
};

export const getUserTranscriptHandler = async (req, res) => {
  try {
    const { id } = req.params; // id của User
    const result = await service.getUserWithCourses(id);
    if (!result) return res.status(404).json({ error: "User not found" });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCourseHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await service.deleteCourse(id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeUserFromCourseHandler = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    const result = await service.removeUserFromCourse(userId, courseId);
    res.json({ message: "User removed from course successfully", user: result });
  } catch (error) {
    res.status(500).json({ error: "Cannot remove user from course" });
  }
};

export const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await service.deleteUser(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};