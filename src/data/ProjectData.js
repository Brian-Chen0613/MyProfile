import PokemonImg from '@/asset/img/projectImg/寶可夢圖鑑.png'
import WeatherImg from '@/asset/img/projectImg/天氣小卡.png'
import Beitun from '@/asset/img/projectImg/北屯社大.png'
import SolarSystem from'@/asset/img/projectImg/solar-system.png'
import Microsoft from '@/asset/img/projectImg/microsoft.png'

export const projectData = [
  {
    id: 1,
    title: '北屯社大官網重設計',
    img: Beitun,
    describe: '基於 Vue 3 重構北屯社大官網，整合資訊、課程、地點等資料的響應式前端專案。',
    tags: ['Vue 3', 'JavaScript', 'RWD'],
    demo: 'https://nchu-11503-taichung-ymca.dev-hub.io/',
    detail: '在「北屯社區大學官網重塑」專題中，我負責前端頁面切版與功能開發，運用 Vue 3 建置全新的網站架構，重新整合最新消息、課程資訊、服務據點及交通資訊等內容，提升資訊查找效率與整體使用體驗。由於網站主要服務對象為中高齡學習者，因此在設計與開發過程中特別重視無障礙與易用性，例如放大文字尺寸、提高版面可讀性、避免使用隱藏式選單，將主要功能按鈕完整顯示於畫面中，降低操作門檻。此外，也透過清晰的資訊架構與響應式設計，讓使用者能在不同裝置上快速獲取所需資訊，打造更友善且符合社區大學需求的數位服務平台。',
    difficulty: '首次與設計師協作，需在開發中同步溝通規格，學習如何將設計稿轉譯為實際元件。',
    solution: '建立固定的溝通節奏，以 Figma 稿件為基準，逐一確認每個元件的互動細節後再實作。',
  },
  {
    id: 2,
    title: '寶可夢圖鑑收藏',
    img: PokemonImg,
    describe: '使用 JavaScript 搭配 RWD 製作的寶可夢收藏網頁。',
    tags: ['CSS', 'JavaScript', 'RWD'],
    demo: 'https://brian-chen0613.github.io/pokemon/',
    detail: '本專題為一個以寶可夢為主題的收藏管理網站，提供使用者建立與管理個人寶可夢圖鑑。使用者可自行新增寶可夢資料，包含寶可夢名稱、屬性、推薦等級及圖片網址等資訊，並透過系統進行統一管理與瀏覽。專案開發過程中著重於表單資料驗證、資料渲染與使用者互動體驗，讓使用者能快速建立完整的收藏內容。',
    difficulty: '初次使用 v-for 跑迴圈進行渲染，時常搞不清楚值是怎麼傳遞的。',
    solution: '瞭解原理後，發現其實跟 forEach 很像，所以使用的次數越來越多。',
  },
  {
    id: 3,
    title: '天氣小卡網站',
    img: WeatherImg,
    describe: '使用 API 串接氣象署資料所打造的即時天氣網站。',
    tags: ['CSS', 'JavaScript', 'API'],
    demo: 'https://brian-chen0613.github.io/weather-card/',
    detail: '本專題為一個天氣資訊小卡應用程式，透過串接中央氣象局開放資料 API，即時取得最新天氣資訊，並將資料動態呈現在網頁介面上。使用者可快速查看天氣狀況、氣溫、降雨機率等重要資訊，提升資訊取得的便利性。',
    difficulty: '初次串接 API，對龐大的資料感到手足無措。',
    solution: '照著步驟多練習幾次取資料的過程，排除不需要的資料，最後再把資料渲染到畫面上。',
  },
    {
    id: 4,
    title: '微軟首頁仿切',
    img: Microsoft,
    describe: '根據官方網站，透過 CSS 樣式跟 HTML 佈局，仿切出逼真的微軟官網。',
    tags: ['HTML','CSS','RWD'],
    demo: 'https://brian-chen0613.github.io/microsoft-imitation/',
    detail: '本專題以微軟官方網站首頁為參考對象，透過 HTML 與 CSS 進行版面仿製練習，目標是在不依賴現成模板的情況下，重現大型商業網站的視覺設計與版面配置。專案中運用了 Flexbox、Grid Layout、響應式設計及多種 CSS 排版技巧，細緻還原導覽列、橫幅區塊、產品展示區及頁尾等主要介面元素。',
    difficulty: '初次嘗試時，頁面太大，區塊太多，不知道從何下手。',
    solution: '將頁面拆寫成數個區塊，再一塊一塊慢慢完成。',
  },
  {
    id: 5,
    title: '九大行星',
    img: SolarSystem,
    describe: '透過純 CSS 建構太陽系行星運行模型',
    tags: ['HTML','CSS'],
    demo: 'https://brian-chen0613.github.io/solar-system/',
    detail: '本作品為學習 HTML 與 CSS 初期所完成的練習專案，以純 CSS 動畫模擬九大行星繞行太陽的運行效果。專案開發時間約在接觸前端技術後的第二週，透過實際製作天體運行動畫，加深對 HTML 結構設計、CSS 定位方式及動畫效果的理解。',
    difficulty: '初次嘗試時，撰寫太多巢狀結構，導致自己無法定位正確的層數。',
    solution: '梳理邏輯後，將結構進行簡化。',
  },
]
