import mongoose from "mongoose"; 
const { Schema } = mongoose;

const staffSchema = new mongoose.Schema(
  {
    MaNV: {
      type: String,
      required: true,
      unique: true,
    },
    HoTen: {
      type: String,
      required: true,
    },
    BiDanh: {
      type: String,
      default: "",
    },
    GioiTinh: {
      type: String,
      enum: ["Nam", "Nữ", "Khác"],
      required: true,
    },
    NgaySinh: {
      type: Date,
      required: true,
    },
    DiaChi: {
      type: String,
      default: "",
    },
    DienThoaiLH: {
      type: String,
      default: "",
    },
    Email: {
      type: String,
      default: "",
    },
    FAX: {
      type: String,
      default: "",
    },
    CCCD: {
      type: String,
      required: true,
      unique: true,
    },
    NoiCap: {
      type: String,
      default: "",
    },
    NgayCap: {
      type: Date,
      required: true,
    },
    Tinh: {
      type: String,
      default: "",
    },
    QuanHuyen: {
      type: String,
      default: "",
    },
    TinhTrangHonNhan: {
      type: String,
      enum: ["Độc thân", "Đã kết hôn"],
      default: "",
    },
    ChucVu: {
      type: String,
      required: true,
    },
    PhongBan: {
      type: String,
      required: true,
    },
    NVPhuTrach: {
      type: String,
      default: "",
    },
    TrangThai: {
      type: String,
      enum: ["Đang làm việc", "Đã nghỉ", "Tạm nghỉ"],
      default: "",
    },
    ThanhPhanGD: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Xuất model
export const StaffModel = mongoose.model("NhanVien",staffSchema , "employee");
