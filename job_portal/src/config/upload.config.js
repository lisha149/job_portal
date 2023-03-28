const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "cv") {
      cb(null, "src/uploads/cv/");
    } else if (file.fieldname === "coverLetter") {
      cb(null, "src/uploads/coverLetter/");
    } else {
      cb(null, "src/uploads/profilePic/");
    }
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "cv") {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === "coverLetter") {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    } else {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
  },
});
const upload = multer({
  storage: storage,
}).fields([
  {
    name: "cv",
    maxCount: 1,
  },
  {
    name: "coverLetter",
    maxCount: 1,
  },
  {
    name: "profilePic",
    maxCount: 1,
  },
]);

module.exports = {
  upload,
};
