import PokemonImg from '@/asset/img/projectImg/寶可夢圖鑑.png'
import WeatherImg from '@/asset/img/projectImg/天氣小卡.png'

export const projectData = [
    {
        id: 1,
        title: '旅遊網站',
        img: 'https://www.erv-nsa.gov.tw/social-article/1615',
        describe: '使用Vue打造旅遊介紹網站',
        skills: ['Vue.js','CSS','JS'],
        detail:'這是一個介紹網站，內容包含北中南的美食、文化以及景點。',
        difficulty:'初次接觸路由相關的操作，導致網頁跳轉時常不順利。',
        solution:'詢問ai，瞭解運作原理後並實際操作，加深印象。'
    },
    {
        id: 2,
        title: '寶可夢圖鑑收藏',
        img: PokemonImg,
        describe: '使用Vue以及RWD打造的一頁式網站',
        skills: ['Vue.js','CSS','RWD','JS'],
        detail:'這是一個收藏網站，可以新增自己已經收服的寶可夢並給予評價。',
        difficulty:'初次使用v-for來跑回圈進行渲染，時常會搞不清楚值是怎麼傳遞的。',
        solution:'瞭解原理後，發現其實跟forEach很像，所以越用越上手。'
    },
    {
        id: 3,
        title: '天氣小卡網站',
        img: WeatherImg,
        describe: '使用API串接氣象局資料所打造的及時天氣網站',
        skills: ['API','CSS','JS'],
        detail:'這是一個即時的天氣網站，可以查詢各地目前的天氣、舒適程度、以及降雨機率。',
        difficulty:'初次串接API，對龐大的資料感到手足無措。',
        solution:'照著老師的步驟，多練習幾次取資料的過程，排除不需要的資料，最後再把資料渲染到畫面上。'
    }
]