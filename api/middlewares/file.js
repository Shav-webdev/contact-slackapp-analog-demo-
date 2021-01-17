const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "promotion") {
      cb(null, "storage/promotions/");
    } else if (file.fieldname === "shop") {
      cb(null, "storage/shops/");
    } else if (file.fieldname === "service") {
      cb(null, "storage/services/");
    } else if (file.fieldname === "resume") {
      cb(null, "storage/resumes/");
    }
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "promotion") {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === "shop") {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === "service") {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === "resume") {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
  },
});

function checkFileType(file, cb) {
  if (file.fieldname === "resume") {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      // check file type to be pdf, doc, or docx
      cb(null, true);
    } else {
      cb(null, false); // else fails
    }
  } else if (
    file.fieldname === "promotion" ||
    file.fieldname === "shop" ||
    file.fieldname === "service"
  ) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/gif"
    ) {
      // check file type to be png, jpeg, or jpg
      cb(null, true);
    } else {
      cb(null, false); // else fails
    }
  }
}

module.exports = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});
