import multer from "multer";

// Khai báo storage trước khi sử dụng
const storage = multer.memoryStorage();

// Sau đó mới tạo đối tượng upload
const upload = multer({ storage });

export { upload };
