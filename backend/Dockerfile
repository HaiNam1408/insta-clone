# Sử dụng phiên bản Node.js LTS
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json trước để cài đặt dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 cho ứng dụng
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]
