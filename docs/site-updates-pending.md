# 網站待更新清單（需要 Sherry 補資料）

> 2026-09-29 已完成的更新見該次 commit。以下是**還缺資料、不能自己編**的項目。
> 補好資料後開 session，照這份改 `src/data/` 即可（所有文字都在那裡）。

## 1. 履歷 PDF（最重要）

- `public/media/docs/resume.pdf` 還是舊版，Hero 的「Résumé」按鈕和導覽列的 Resume 都連到它。
- 新版需要：書卷獎 ×3、Mitacs / Printage 改成已結束、新增 Microsoft (Beyondsoft) 實習、Caring Machine。
- 做法：用同一個檔名覆蓋 `public/media/docs/resume.pdf`（可先壓縮，其他 PDF 都有壓過）。

## 2. Experience — Microsoft (via Beyondsoft)（`src/data/experience.ts`）

- **地點**：目前先寫 `Taipei, Taiwan`，請確認（程式裡有 `TODO(confirm)`）。
- **技術棧**：目前只寫 `RAG / LLM / Full-stack`，可補 Azure、Python、TypeScript、框架等。
- **量化成果**：有的話補進 highlights（例如文件量、回答準確率、服務的客戶數）。
- **照片**：目前沒有照片，右側顯示自動產生的「Microsoft」色塊。有照片就放 `public/media/work/microsoft.webp`，並在該筆資料加上 `photo: '/media/work/microsoft.webp'`。
- 確認 NDA：能不能寫出專案名稱或更具體的內容。

## 3. Experience — WIDM Lab

- 「Improved the harness around the agent architecture」目前很籠統：補一句**改了什麼、帶來什麼效果**。
- 論文狀態：還是 *paper in preparation* 嗎？

## 4. Experience — Mitacs

- 研究產出（原型、user study、投稿）有的話補一句。
- 結束月份目前寫 `Sept 2026`，請確認。

## 5. Projects — Caring Machine（`src/data/projects.ts`）

- **論文結果這幾天出來** → 錄取就在 summary 補一句（例如 "Accepted to …"），並把 `Working on` 旁加一個連結或徽章；未錄取就維持不寫。WISE 2026 那篇不列。
- **開始時間**：目前寫 `2026 – Present`，請確認（有 `TODO(confirm)`）。
- **實證的細節**：你負責的 empirical validation 是什麼形式？受試者人數？主要結果？補上會比現在具體很多。
- 可以的話補一張截圖或 demo 圖到 `public/media/projects/caring-machine.webp`（沒圖會顯示自動產生的封面）。

## 6. Projects — Slide Retrieval RAG Pipeline

- 有 GitHub repo 或 Kaggle 頁面的話補連結。
- 可補一張架構圖當封面。

## 7. Projects — 舞告 Match

- 技術棧還是 placeholder（程式裡原本就有 `TODO(confirm)`）。

## 8. Leadership / Awards（`src/data/leadership.ts`）

- **Sea x OpenAI Codex Hackathon Taiwan（2026-09-12）**：要不要放？有名次的話補名次、作品簡介和照片。
- 部分描述還是現在進行式（例如 IM Night 的 "Leading the organization…"、Publicity 的 "Managing…"），但都已結束，可改成過去式。

## 9. 其他

- About 的「Here are a few technologies I've been working with recently」清單（Next.js、React、TypeScript、Python、PyTorch、PostgreSQL）可考慮加上 RAG / LLM 相關的工具。
- Contact 寫 "I am currently looking for new opportunities"——若目前沒有在找，可改寫。
- 部署後用手機看一次版面。
