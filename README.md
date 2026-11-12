# 月等效業績試算系統

純靜態網站，不需安裝套件。開啟 index.html 即可使用。

## 上傳至 GitHub Pages

建議 Repository name：monthly-performance-calculator（可自行更換，不影響功能）。

1. 在 GitHub 建立新的儲存庫。
2. 點 Add file → Upload files，上傳 index.html、style.css、calculator.js、app.js，確保 index.html 在儲存庫最外層。按 Commit changes。
3. 開啟 Settings → Pages。
4. Source 選 Deploy from a branch。
5. Branch 選 main，資料夾選 / (root)，按 Save。
6. 等 GitHub 部署完成，再開啟 Pages 頁面提供的網址。

網址通常為 https://你的帳號.github.io/你的儲存庫名稱/。

## 計算規則

月等效業績 = 本月總業績 ÷ 諮詢點天數 × 應排班天數。
依未四捨五入的等效業績決定級距，總抽成 = 實際本月業績 × 對應比例，並非累進計算。
級距沿用參考網站，集中在 calculator.js。畫面不顯示比例、級距表與評語。
天數必須為正整數；業績允許 0，禁止負數；顯示金額四捨五入至整元。
修改輸入後會清除舊結果，需重新點選試算。
資料僅在瀏覽器中計算，沒有儲存、上傳或分析追蹤。
隱藏規則僅為介面隱藏：GitHub Pages 的前端計算程式可公開查看。
