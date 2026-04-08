# SITEMAP - Bản Đồ Màn Hình Hệ Thống Quản Lý Khóa Học

## 1. VISUAL SITEMAP TREE

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃            COURSE MANAGEMENT SYSTEM - SITEMAP          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

📱 ROOT: https://localhost:3000/

├─ 🏠 Home Page
│  └─ Dashboard / Landing Page
│
├─ 👤 USER MANAGEMENT
│  ├─ [2.1] /users
│  │  └─ Users Listing (Danh Sách Người Dùng)
│  │     ├─ Tính năng:
│  │     │  ├─ Hiển thị bảng user
│  │     │  ├─ Search / Filter
│  │     │  ├─ Pagination
│  │     │  ├─ Sort (Name, Email, Created Date)
│  │     │  └─ Action buttons
│  │     │
│  │     ├─ Button: "Create New User"
│  │     │  ↓
│  │     │  [2.3] /users/create
│  │     │  └─ Create User Form (Tạo Người Dùng Mới)
│  │     │     ├─ Input fields:
│  │     │     │  ├─ Name (Text Input)
│  │     │     │  └─ Email (Email Input)
│  │     │     ├─ Validation messages
│  │     │     └─ Buttons: Create / Cancel
│  │     │
│  │     └─ Click on user row
│  │        ↓
│  │        [2.2] /users/:id
│  │        └─ User Detail & User Courses (Chi Tiết Người Dùng)
│  │           ├─ Display fields:
│  │           │  ├─ User Info (Name, Email, Created Date)
│  │           │  ├─ Enrolled Courses (List)
│  │           │  └─ Statistics (# of courses)
│  │           │
│  │           ├─ Button: "Edit" ─→ [2.4] /users/:id/edit
│  │           │  ├─ Edit User Form
│  │           │  ├─ Pre-filled data
│  │           │  └─ Save / Cancel
│  │           │
│  │           ├─ Button: "Enroll Course" ─→ [4.2]
│  │           │
│  │           └─ Button: "Delete"
│  │              ↓
│  │              [2.5] /users/:id (DELETE)
│  │              └─ Delete Confirmation Modal (Xóa Người Dùng)
│  │                 ├─ Message: "Are you sure?"
│  │                 └─ Buttons: Confirm / Cancel
│  │
│  └─ Back to: [2.1] /users
│
├─ 📚 COURSE MANAGEMENT
│  ├─ [3.1] /courses
│  │  └─ Courses Listing (Danh Sách Khóa Học)
│  │     ├─ Tính năng:
│  │     │  ├─ Hiển thị bảng course
│  │     │  ├─ Search / Filter
│  │     │  ├─ Sort (Title, Code)
│  │     │  ├─ Show # of enrolled students
│  │     │  └─ Action buttons
│  │     │
│  │     ├─ Button: "Create New Course"
│  │     │  ↓
│  │     │  [3.3] /courses/create
│  │     │  └─ Create Course Form (Tạo Khóa Học Mới)
│  │     │     ├─ Input fields:
│  │     │     │  ├─ Title (Text Input)
│  │     │     │  ├─ Code (Text Input)
│  │     │     │  └─ Users (Multi-select)
│  │     │     ├─ Validation messages
│  │     │     └─ Buttons: Create / Cancel
│  │     │
│  │     └─ Click on course row
│  │        ↓
│  │        [3.2] /courses/:id
│  │        └─ Course Detail (Chi Tiết Khóa Học)
│  │           ├─ Display fields:
│  │           │  ├─ Course Info (Title, Code)
│  │           │  ├─ Enrolled Users (List)
│  │           │  └─ Statistics (# of students)
│  │           │
│  │           ├─ Button: "Edit" ─→ [3.4] /courses/:id/edit
│  │           │  ├─ Edit Course Form
│  │           │  ├─ Pre-filled data
│  │           │  └─ Save / Cancel
│  │           │
│  │           └─ Button: "Delete"
│  │              ↓
│  │              [3.5] /courses/:id (DELETE)
│  │              └─ Delete Confirmation Modal (Xóa Khóa Học)
│  │                 ├─ Message: "Are you sure?"
│  │                 └─ Buttons: Confirm / Cancel
│  │
│  └─ Back to: [3.1] /courses
│
├─ ✏️ ENROLLMENT MANAGEMENT
│  ├─ [4.1] /users/:id/schedule
│  │  └─ User Schedule / Enrollment List (Thời Khóa Biểu)
│  │     ├─ Tính năng:
│  │     │  ├─ Danh sách khóa học đã đăng ký
│  │     │  ├─ Hiển thị chi tiết từng khóa
│  │     │  └─ Action buttons (Unenroll)
│  │     │
│  │     └─ Button: "Enroll New Course"
│  │        ↓
│  │        [4.2] /enroll
│  │        └─ Enroll Form (Đăng Ký Khóa Học Mới)
│  │           ├─ Select Course (Dropdown)
│  │           ├─ Confirmation
│  │           └─ Buttons: Enroll / Cancel
│  │
│  ├─ [4.3] /unenroll
│  │  └─ Unenroll Confirmation (Hủy Đăng Ký)
│  │     ├─ Modal confirm:
│  │     │  └─ "Remove from course?"
│  │     └─ Buttons: Confirm / Cancel
│  │
│  ├─ [4.4] /users/:id/transcript
│  │  └─ User Transcript (Bảng Điểm / Lịch Sử)
│  │     ├─ Danh sách khóa học hoàn thành
│  │     ├─ Điểm / Trạng thái
│  │     └─ Thống kê
│  │
│  └─ Back to: [2.2] User Detail
│
├─ 📊 REPORTS & STATISTICS (Future)
│  ├─ [5.1] /reports/users
│  │  └─ User Statistics (Thống Kê Người Dùng)
│  │     ├─ Total users
│  │     ├─ New users (this month)
│  │     ├─ Most enrolled courses
│  │     └─ Charts & graphs
│  │
│  └─ [5.2] /reports/courses
│     └─ Course Statistics (Thống Kê Khóa Học)
│        ├─ Total courses
│        ├─ Most enrolled courses
│        ├─ Average students per course
│        └─ Charts & graphs
│
└─ 🔐 AUTHENTICATION (Future)
   ├─ [1.1] /auth/login
   │  └─ Login Page (Đăng Nhập)
   │     ├─ Email input
   │     ├─ Password input
   │     └─ "Forgot password?" link
   │
   ├─ [1.2] /auth/register
   │  └─ Register Page (Đăng Ký Tài Khoản)
   │     ├─ Name input
   │     ├─ Email input
   │     ├─ Password input
   │     └─ "Already have account?" link
   │
   └─ [1.3] /auth/logout
      └─ Logout Action
```

---

## 2. SITEMAP MATRIX

| Screen # | Screen Name       | URL                     | HTTP Method | Type   | Status       |
| -------- | ----------------- | ----------------------- | ----------- | ------ | ------------ |
| 1.1      | Login             | `/auth/login`           | GET         | Page   | ⏳ TODO      |
| 1.2      | Register          | `/auth/register`        | GET         | Page   | ⏳ TODO      |
| 2.1      | User List         | `/users`                | GET         | Page   | ✅ API Ready |
| 2.2      | User Detail       | `/users/:id`            | GET         | Page   | ✅ API Ready |
| 2.3      | Create User       | `/users/create`         | GET/POST    | Page   | ✅ API Ready |
| 2.4      | Edit User         | `/users/:id/edit`       | GET/POST    | Page   | ⏳ TODO      |
| 2.5      | Delete User       | `/users/:id`            | DELETE      | Action | ✅ API Ready |
| 3.1      | Course List       | `/courses`              | GET         | Page   | ✅ API Ready |
| 3.2      | Course Detail     | `/courses/:id`          | GET         | Page   | ✅ API Ready |
| 3.3      | Create Course     | `/courses/create`       | GET/POST    | Page   | ✅ API Ready |
| 3.4      | Edit Course       | `/courses/:id/edit`     | GET/POST    | Page   | ⏳ TODO      |
| 3.5      | Delete Course     | `/courses/:id`          | DELETE      | Action | ✅ API Ready |
| 4.1      | User Schedule     | `/users/:id/schedule`   | GET         | Page   | ✅ API Ready |
| 4.2      | Enroll Course     | `/enroll`               | POST        | Action | ✅ API Ready |
| 4.3      | Unenroll Course   | `/unenroll`             | POST        | Action | ✅ API Ready |
| 4.4      | Transcript        | `/users/:id/transcript` | GET         | Page   | ✅ API Ready |
| 5.1      | User Statistics   | `/reports/users`        | GET         | Page   | ⏳ TODO      |
| 5.2      | Course Statistics | `/reports/courses`      | GET         | Page   | ⏳ TODO      |

---

## 3. SCREEN SPECIFICATIONS

### Screen 2.1: User List (Danh Sách Người Dùng)

```
┌────────────────────────────────────────────────────────┐
│ 👤 User Management                                      │
├────────────────────────────────────────────────────────┤
│ [Search____] [Filter ▼] [+ Create New User]           │
├────────────────────────────────────────────────────────┤
│ # │ ID │ Name          │ Email             │ Created   │
├────────────────────────────────────────────────────────┤
│ 1 │ 1  │ Nguyễn Bảo    │ nguyenbaokhang@.. │ 05/04/26  │
│   │    │ Khang         │                   │           │
│   │    │ [View][Edit][Delete]                          │
├────────────────────────────────────────────────────────┤
│ 2 │ 2  │ Trần Minh     │ mintran@gmail.com │ 05/04/26  │
│   │    │ Đức           │                   │           │
│   │    │ [View][Edit][Delete]                          │
├────────────────────────────────────────────────────────┤
│ 3 │ 3  │ Lê Thanh Hà   │ leha@gmail.com    │ 05/04/26  │
│   │    │               │                   │           │
│   │    │ [View][Edit][Delete]                          │
├────────────────────────────────────────────────────────┤
│ Showing 1-3 of 3 users | Page 1 of 1                  │
└────────────────────────────────────────────────────────┘
```

**Data Displayed:**

- User ID
- Full Name
- Email Address
- Created Date
- Action buttons (View, Edit, Delete)

**Features:**

- Search by name or email
- Filter by creation date
- Sort columns
- Pagination

---

### Screen 2.2: User Detail (Chi Tiết Người Dùng)

```
┌────────────────────────────────────────────────────────┐
│ 👤 User Profile: Nguyễn Bảo Khang                     │
├────────────────────────────────────────────────────────┤
│ User Information                                        │
│ ├─ Name: Nguyễn Bảo Khang                             │
│ ├─ Email: nguyenbaokhang8911@gmail.com                │
│ ├─ User ID: 1                                          │
│ └─ Created: 05/04/2026 13:07                          │
│                                                        │
│ [Edit Profile] [Enroll Course] [Delete Account]       │
├────────────────────────────────────────────────────────┤
│ Enrolled Courses (2)                                   │
│ ┌──────────────────────────────────────────────────┐  │
│ │ Course ID │ Title            │ Code  │ Action    │  │
│ ├──────────────────────────────────────────────────┤  │
│ │ 1         │ Lập Trình        │ TMP2  │ [Drop]    │  │
│ │ 2         │ Web Development  │ WEB1  │ [Drop]    │  │
│ └──────────────────────────────────────────────────┘  │
│                                                        │
│ [Back to Users List]                                  │
└────────────────────────────────────────────────────────┘
```

**Data Displayed:**

- User basic info
- List of enrolled courses
- Action buttons

---

### Screen 2.3: Create User (Tạo Người Dùng Mới)

```
┌────────────────────────────────────────────────────────┐
│ ➕ Create New User                                     │
├────────────────────────────────────────────────────────┤
│ Full Name *                                            │
│ ┌────────────────────────────────────────────────────┐│
│ │ [Enter full name]                                 ││
│ └────────────────────────────────────────────────────┘│
│ Error: Name is required                               │
│                                                        │
│ Email Address *                                        │
│ ┌────────────────────────────────────────────────────┐│
│ │ [user@example.com]                                ││
│ └────────────────────────────────────────────────────┘│
│ Error: Invalid email format                           │
│ Error: Email already exists                           │
│                                                        │
│ [Cancel] [Create User]                               │
└────────────────────────────────────────────────────────┘
```

**Form Fields:**

- Name (Required)
- Email (Required, Unique, Valid format)

**Validations:**

- Name: Not empty, 1-255 chars
- Email: Valid format, unique in DB

---

### Screen 3.1: Course List (Danh Sách Khóa Học)

```
┌────────────────────────────────────────────────────────┐
│ 📚 Course Management                                   │
├────────────────────────────────────────────────────────┤
│ [Search____] [Filter ▼] [+ Create New Course]        │
├────────────────────────────────────────────────────────┤
│ # │ ID │ Title              │ Code  │ Students │ Actn │
├────────────────────────────────────────────────────────┤
│ 1 │ 1  │ Lập Trình          │ TMP2  │ 5        │ ☰   │
│ 2 │ 2  │ Web Development    │ WEB1  │ 8        │ ☰   │
│ 3 │ 3  │ Database Design    │ DB101 │ 3        │ ☰   │
├────────────────────────────────────────────────────────┤
│ Showing 1-3 of 3 courses | Page 1 of 1               │
└────────────────────────────────────────────────────────┘
```

**Data Displayed:**

- Course ID
- Title
- Code
- Number of enrolled students
- Action menu

---

### Screen 4.1: User Schedule (Thời Khóa Biểu)

```
┌────────────────────────────────────────────────────────┐
│ 📅 My Schedule - Nguyễn Bảo Khang                     │
├────────────────────────────────────────────────────────┤
│ Enrolled Courses (2)                  [+ Enroll New]   │
├────────────────────────────────────────────────────────┤
│ Course 1: Lập Trình                                   │
│ ├─ Code: TMP2                                         │
│ ├─ Enrolled: 05/04/2026                              │
│ └─ [Drop Course] [View Details]                      │
│                                                        │
│ Course 2: Web Development                             │
│ ├─ Code: WEB1                                         │
│ ├─ Enrolled: 05/04/2026                              │
│ └─ [Drop Course] [View Details]                      │
│                                                        │
│ [Back]                                               │
└────────────────────────────────────────────────────────┘
```

---

## 4. NAVIGATION FLOWS

### Flow: Create User & Enroll Course

```
Start
  ↓
[2.3] Create User Form
  ↓ Fill: Name, Email
  ↓
Validate Input
  ↓
✅ Success
  ↓
↓ Auto-redirect
[2.1] User List (Show new user)
  ↓
Click "View" on new user
  ↓
[2.2] User Detail
  ↓
Click "Enroll Course"
  ↓
[4.2] Enroll Form (Select course, confirm)
  ↓
✅ Enrolled
  ↓
[4.1] User Schedule (Show updated list)
  ↓
End
```

### Flow: Create Course

```
Start
  ↓
[3.1] Course List
  ↓
Click "+ Create New Course"
  ↓
[3.3] Create Course Form
  ↓ Fill: Title, Code, (Optional) Users
  ↓
Validate Input
  ↓
✅ Success
  ↓
↓ Auto-redirect
[3.1] Course List (Show new course)
  ↓
End
```

---

## 5. SUMMARY TABLE

| Category                | Count | Details                                |
| ----------------------- | ----- | -------------------------------------- |
| **Total Screens**       | 18    | Pages + Actions                        |
| **User Mgmt Screens**   | 5     | List, Detail, Create, Edit, Delete     |
| **Course Mgmt Screens** | 5     | List, Detail, Create, Edit, Delete     |
| **Enrollment Screens**  | 4     | Schedule, Enroll, Unenroll, Transcript |
| **Reports Screens**     | 2     | User Stats, Course Stats               |
| **Auth Screens**        | 3     | Login, Register, Logout                |
| **Implemented**         | 14    | Backend API ready                      |
| **To Implement**        | 4     | Frontend pages                         |

---

**Document Version:** 1.0  
**Last Updated:** 2026-04-05  
**Status:** Complete for Backend API, Pending Frontend
