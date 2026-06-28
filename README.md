# 個人作品集 Portfolio

收錄並展示個人前端作品，供求職面試參考使用。

🔗 **Demo：** [https://brian-chen0613.github.io/MyProfile/](https://brian-chen0613.github.io/MyProfile/)

---

## 專案簡介

以 Vue 3 打造的個人作品集網站，包含個人介紹、技能展示、作品列表與作品詳情頁，採響應式設計支援桌機與手機瀏覽。

---

## 頁面結構

| 路由 | 說明 |
|------|------|
| `/` | 首頁：個人介紹 Hero + 精選作品 |
| `/skills` | 技能：前端技術能力展示 |
| `/projects` | 作品：所有作品卡片列表 |
| `/projects/:id` | 作品詳情：專案說明、挑戰與解決方式 |

---

## 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | Vue 3（Composition API / `<script setup>`） |
| 路由 | Vue Router 5 |
| 狀態管理 | Pinia |
| 建置工具 | Vite 8 |
| 圖示 | Font Awesome（Free Solid + Brands） |
| 輪播 | Swiper |
| 樣式 | 原生 CSS（Scoped + CSS 變數色彩系統） |
| 部署 | GitHub Pages（GitHub Actions 自動部署） |

---

## 本地啟動

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 打包
npm run build
```

Node.js 版本需求：`^20.19.0 || >=22.12.0`
