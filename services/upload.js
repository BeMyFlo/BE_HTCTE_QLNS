import multer from "multer";

// const upload = multer({ storage });
const upload = undefined;
const storage = multer.memoryStorage();

export { upload };
