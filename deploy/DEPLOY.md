# Deploy Codexa (static) lên Ubuntu

Trang chạy tại: **https://test.ws-jobshare.com/codexa/**

Thư mục trên server: **`/home/ubuntu/codexa`**

## 1. Build file tĩnh (máy dev)

```bash
cd frontend
pnpm install
pnpm run build
```

Output: `frontend/dist/` (đã set `VITE_BASE=/codexa/` trong `.env.production`).

## 2. Upload lên server

Copy toàn bộ nội dung `dist/` vào `/home/ubuntu/codexa/` (không copy cả thư mục `dist`, chỉ file bên trong).

Ví dụ từ máy Windows (PowerShell, đã có OpenSSH):

```powershell
scp -r D:\KietVu\Project\Codexa\frontend\dist\* ubuntu@<SERVER_IP>:/home/ubuntu/codexa/
```

Hoặc rsync (WSL/Git Bash):

```bash
rsync -avz --delete frontend/dist/ ubuntu@<SERVER_IP>:/home/ubuntu/codexa/
```

Trên server (lần đầu):

```bash
mkdir -p /home/ubuntu/codexa
sudo chown -R ubuntu:ubuntu /home/ubuntu/codexa
```

## 3. Nginx

File mẫu đầy đủ: [`deploy/nginx/test.ws-jobshare.com.conf`](nginx/test.ws-jobshare.com.conf)

Chỉ cần thêm block Codexa (đặt **trước** `location /` của Jobshare):

```nginx
location = /codexa {
    return 301 /codexa/;
}

location /codexa/ {
    root /home/ubuntu;
    index index.html;
    try_files $uri $uri/ /codexa/index.html;
}
```

Trên server:

```bash
sudo cp /path/to/test.ws-jobshare.com.conf /etc/nginx/sites-available/test.ws-jobshare.com.conf
sudo nginx -t
sudo systemctl reload nginx
```

## 4. Kiểm tra

- https://test.ws-jobshare.com/codexa/
- DevTools → Network: JS/CSS phải load từ `/codexa/assets/...`

## Build local ở root `/` (preview)

```bash
VITE_BASE=/ pnpm run build
```
