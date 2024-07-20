const express = require("express")
const router = express.Router()

const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course")

const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")

const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")


const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")


const {
  createRating,
  getAverageRating,
  getAllRatingReview,
} = require("../controllers/RatingandReview")

const {
  updateCourseProgress,
  getProgressPercentage,
} = require("../controllers/courseProgress")

const { auth, isInstructor, isStudent, isAdmin } = require("../middleware/auth")


router.post("/createCourse", auth, isInstructor, createCourse)

router.post("/editCourse", auth, isInstructor, editCourse)

router.post("/addSection", auth, isInstructor, createSection)

router.post("/updateSection", auth, isInstructor, updateSection)

router.post("/deleteSection", auth, isInstructor, deleteSection)

router.post("/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection)
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)

router.post("/getFullCourseDetails", auth, getFullCourseDetails)

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress)
// To get Course Progress
// router.post("/getProgressPercentage", auth, isStudent, getProgressPercentage)
// Delete a Course
router.delete("/deleteCourse", deleteCourse)


router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)
router.post("/getCategoryPageDetails", categoryPageDetails)


router.post("/createRating", auth, isStudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRatingReview)

module.exports = router
