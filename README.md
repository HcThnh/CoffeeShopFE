# CoffeeShopFE ☕

Hệ thống Frontend quản lý và đặt hàng cho Quán Cà Phê (**Coffee Shop Management & Customer Portal**). 

Dự án bao gồm 2 phân hệ chính:
- **`admin`**: Trang quản trị dành cho Quản lý & Chủ quán (Admin Dashboard).
- **`userfe`**: Trang dành cho Khách hàng & Nhân viên (Customer Portal & Staff View).

---

## 🚀 Công Nghệ Sử Dụng (Tech Stack)

- **Framework/Library:** React 18 / 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Routing:** React Router DOM (v7)
- **HTTP Client:** Axios
- **Icons:** Lucide React

---

## 📁 Cấu Trúc Thư Mục (Project Structure)

```text
CoffeeShopFE/
├── admin/                  # Dashboard Quản Trị
│   ├── src/                # Mã nguồn phẩn hệ Admin
│   ├── public/             # Tài nguyên tĩnh
│   ├── package.json        # Cấu hình dependencies phân hệ Admin
│   └── vite.config.js      # Cấu hình Vite cho Admin
│
├── userfe/                 # Portal Khách Hàng / Nhân Viên
│   ├── src/                # Mã nguồn phân hệ User & Staff
│   ├── public/             # Tài nguyên tĩnh
│   ├── package.json        # Cấu hình dependencies phân hệ User
│   └── vite.config.js      # Cấu hình Vite cho User
│
├── .gitignore              # Git Ignore tập trung
└── README.md               # Tài liệu hướng dẫn dự án
```

---

## 🛠️ Hướng Dẫn Cài Đặt & Khởi Chạy (Getting Started)

### Yêu cầu hệ thống:
- **Node.js**: `>= 18.x`
- **npm** hoặc **yarn** / **pnpm**

---

### 1. Phân hệ Admin (`/admin`)

Trang quản trị cho phép xem báo cáo, quản lý ca làm, quản lý nhân viên, lịch phân công và các đánh giá từ khách hàng.

```bash
# Chuyển vào thư mục admin
cd admin

# Cài đặt thư viện
npm install

# Khởi chạy môi trường phát triển (Development)
npm run dev
```

> Mặc định ứng dụng sẽ chạy tại địa chỉ: `http://localhost:5173` (hoặc cổng hiển thị trong terminal).

**Các lệnh khả dụng trong `admin`:**
- `npm run dev`: Chạy server phát triển.
- `npm run build`: Đóng gói sản phẩm cho production (xuất ra thư mục `dist/`).
- `npm run preview`: Xem trước bản build production.
- `npm run lint`: Kiểm tra lỗi syntax/style code với ESLint.

---

### 2. Phân hệ User (`/userfe`)

Giao diện cho khách hàng xem thực đơn, đặt món, xem lịch trình và tích điểm đổi quà.

```bash
# Chuyển vào thư mục userfe
cd userfe

# Cài đặt thư viện
npm install

# Khởi chạy môi trường phát triển (Development)
npm run start
# hoặc
npm run dev
```

> Mặc định ứng dụng sẽ chạy tại địa chỉ theo cấu hình Vite.

**Các lệnh khả dụng trong `userfe`:**
- `npm run start`: Chạy server phát triển (Vite).
- `npm run build`: Đóng gói sản phẩm cho production.
- `npm run preview`: Xem trước bản build production.

---

## 📝 Đóng Góp & Phát Triển (Contribution)

1. Tạo branch mới cho tính năng hoặc sửa lỗi:
   ```bash
   git checkout -b feature/ten-tinh-nang
   ```
2. Commit các thay đổi:
   ```bash
   git commit -m "feat: thêm tính năng X"
   ```
3. Push lên branch tương ứng và tạo Pull Request.

---

## 📄 Giấy Phép (License)

Dự án thuộc sở hữu nội bộ của hệ thống CoffeeShop.
