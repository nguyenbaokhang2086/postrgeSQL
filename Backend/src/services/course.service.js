import { prisma } from "../config/prisma/client.js";

// 1. Lấy tất cả khóa học
export const getAllCourses = async () => {
  return await prisma.course.findMany({
    include: { users: { select: { id: true } } },
    orderBy: { id: 'desc' },
  });
};

// 2. Tạo khóa học
export const createCourse = async (data) => {
  return await prisma.course.create({ data });
};


// 2. Tạo User
export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

// 3. Đăng ký khóa học (Dùng userId)
export const enrollUserToCourse = async (userId, courseId) => {
  return await prisma.user.update({
    where: { id: Number(userId) },
    data: {
      courses: {
        connect: { id: Number(courseId) }
      }
    },
    include: { courses: true }
  });
};

// 4. Lấy thông tin User kèm các khóa học
export const getUserWithCourses = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: Number(userId) },
    include: { courses: true }
  });
};

// 5. Xóa khóa học
export const deleteCourse = async (courseId) => {
  return await prisma.course.delete({
    where: { id: Number(courseId) }
  });
};

// 6. Xóa người dùng khỏi khóa học
export const removeUserFromCourse = async (userId, courseId) => {
  return await prisma.user.update({
    where: { id: Number(userId) },
    data: {
      courses: {
        disconnect: { id: Number(courseId) }
      }
    },
    include: { courses: true }
  });
};

// 7. Xóa người dùng
export const deleteUser = async (userId) => {
  return await prisma.user.delete({
    where: { id: Number(userId) }
  });
};

// 8. Cập nhật thông tin người dùng
export const updateUser = async (userId, data) => {
  return await prisma.user.update({
    where: { id: Number(userId) },
    data
  });
};

// 9. Cập nhật thông tin khóa học
export const updateCourse = async (courseId, data) => {
  return await prisma.course.update({
    where: { id: Number(courseId) },
    data
  });
};
