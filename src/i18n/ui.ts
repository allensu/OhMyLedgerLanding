export const defaultLang = 'zh-TW' as const;

export const languages = {
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  en: 'English',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  'zh-TW': {
    'brand.name': '哦賣記帳',
    'meta.title': '哦賣記帳 · 花錢當下就記，不拖到睡前',
    'meta.description':
      '手機記帳 App，讓你花錢的當下就記下來，三秒搞定。資料只存你手機，不上雲、不追蹤、不賣廣告。',

    'nav.features': '功能',
    'nav.about': '關於',
    'nav.faq': '常見問題',

    'hero.headline': '每次都睡前才想記帳？\n結果早就忘了花過什麼。',
    'hero.subhead':
      '哦賣記帳讓你花錢的當下就記下來，三秒搞定。\n資料只存在你的手機裡，沒帳號、沒雲端、沒廣告。',
    'hero.cta.primary': '免費下載',
    'hero.cta.secondary': '看看怎麼用',
    'hero.badge': '個人練習作品 · 不收費',

    'features.title': '為什麼是它？',
    'features.subtitle': '解決一個小而真實的問題。',
    'features.one.title': '當下就記，不拖延',
    'features.one.body':
      '買完飯、加完油、剛付完帳——打開就能記，三秒結束。不用留到晚上回想，不會再漏記。',
    'features.two.title': '資料只在你手機',
    'features.two.body':
      'SQLite 本地儲存，沒有帳號、沒有雲端、沒有追蹤。不必擔心資料外洩或被拿去分析。',
    'features.three.title': '極簡、多語系',
    'features.three.body':
      '繁中、簡中、英文、日文，視覺化 emoji 分類。打開就會用，沒有多餘功能。',

    'screenshots.title': '長這樣',
    'screenshots.subtitle': '實際畫面截圖',
    'screenshots.home': '首頁與總資產',
    'screenshots.add': '三秒記一筆',
    'screenshots.stats': '每月收支統計',

    'about.title': '關於這個作品',
    'about.body':
      '這是我用 AI 協作練習寫程式的小作品。\n原本只是想解決自己的問題：每天下班回到家才在電腦前記帳，結果一半都忘了花過什麼。所以做了這個手機版，花錢當下就記。\n做完覺得朋友可能也用得到，就發出來了。不收錢、不賣資料、不會塞廣告。\n有任何建議或問題，歡迎到粉專找我聊聊。',

    'faq.title': '常見問題',
    'faq.q1': '需要註冊帳號嗎？',
    'faq.a1': '不需要。打開就能用，資料直接存在你手機。',
    'faq.q2': '資料會上傳雲端嗎？',
    'faq.a2': '不會。完全本地儲存，我也不會知道你記了什麼。',
    'faq.q3': '換手機怎麼辦？',
    'faq.a3':
      '目前還沒做雲端同步（因為堅持隱私優先）。備份 / 匯出功能在規劃中，會放到下一版。',
    'faq.q4': '以後會收費嗎？',
    'faq.a4': '沒有這個打算。這是我的練習作品，不是要做生意。',

    'footer.tagline': '花錢當下就記',
    'footer.madeBy': '由 AI 協作練習製作',
    'footer.contact': '有建議？',
    'footer.contact.fb': 'FB 粉專',
    'footer.copyright': '© 2026 哦賣記帳',

    'lang.switcher': '語言',
  },

  'zh-CN': {
    'brand.name': '哦卖记账',
    'meta.title': '哦卖记账 · 花钱当下就记，不拖到睡前',
    'meta.description':
      '手机记账 App，让你花钱的当下就记下来，三秒搞定。数据只存你手机，不上云、不追踪、不卖广告。',

    'nav.features': '功能',
    'nav.about': '关于',
    'nav.faq': '常见问题',

    'hero.headline': '每次都睡前才想记账？\n结果早就忘了花过什么。',
    'hero.subhead':
      '哦卖记账让你花钱的当下就记下来，三秒搞定。\n数据只存在你的手机里，没账号、没云端、没广告。',
    'hero.cta.primary': '免费下载',
    'hero.cta.secondary': '看看怎么用',
    'hero.badge': '个人练习作品 · 不收费',

    'features.title': '为什么是它？',
    'features.subtitle': '解决一个小而真实的问题。',
    'features.one.title': '当下就记，不拖延',
    'features.one.body':
      '买完饭、加完油、刚付完账——打开就能记，三秒结束。不用留到晚上回想，不会再漏记。',
    'features.two.title': '数据只在你手机',
    'features.two.body':
      'SQLite 本地存储，没有账号、没有云端、没有追踪。不必担心数据外泄或被拿去分析。',
    'features.three.title': '极简、多语言',
    'features.three.body':
      '繁中、简中、英文、日文，可视化 emoji 分类。打开就会用，没有多余功能。',

    'screenshots.title': '长这样',
    'screenshots.subtitle': '实际画面截图',
    'screenshots.home': '首页与总资产',
    'screenshots.add': '三秒记一笔',
    'screenshots.stats': '每月收支统计',

    'about.title': '关于这个作品',
    'about.body':
      '这是我用 AI 协作练习写程序的小作品。\n原本只是想解决自己的问题：每天下班回到家才在电脑前记账，结果一半都忘了花过什么。所以做了这个手机版，花钱当下就记。\n做完觉得朋友可能也用得到，就发出来了。不收钱、不卖数据、不会塞广告。\n有任何建议或问题，欢迎到粉专找我聊聊。',

    'faq.title': '常见问题',
    'faq.q1': '需要注册账号吗？',
    'faq.a1': '不需要。打开就能用，数据直接存在你手机。',
    'faq.q2': '数据会上传云端吗？',
    'faq.a2': '不会。完全本地存储，我也不会知道你记了什么。',
    'faq.q3': '换手机怎么办？',
    'faq.a3':
      '目前还没做云端同步（因为坚持隐私优先）。备份 / 导出功能在规划中，会放到下一版。',
    'faq.q4': '以后会收费吗？',
    'faq.a4': '没有这个打算。这是我的练习作品，不是要做生意。',

    'footer.tagline': '花钱当下就记',
    'footer.madeBy': '由 AI 协作练习制作',
    'footer.contact': '有建议？',
    'footer.contact.fb': 'FB 粉专',
    'footer.copyright': '© 2026 哦卖记账',

    'lang.switcher': '语言',
  },

  en: {
    'brand.name': 'OhMyLedger',
    'meta.title': 'OhMyLedger · Log it the moment you spend',
    'meta.description':
      'A mobile ledger app that lets you log expenses the moment you spend. Data stays on your phone — no cloud, no tracking, no ads.',

    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.faq': 'FAQ',

    'hero.headline': 'Still waiting until bedtime\nto log your spending?',
    'hero.subhead':
      'OhMyLedger lets you log expenses the moment they happen —\nthree seconds, done. Data stays on your phone. No account, no cloud, no ads.',
    'hero.cta.primary': 'Download free',
    'hero.cta.secondary': 'See how it works',
    'hero.badge': 'Personal side project · Free forever',

    'features.title': 'Why this one?',
    'features.subtitle': 'Solving a small, real problem.',
    'features.one.title': 'Log it on the spot',
    'features.one.body':
      'Just paid for lunch, gas, or a bill? Open, tap, done in three seconds. No more trying to remember at night.',
    'features.two.title': 'Your data, your phone',
    'features.two.body':
      'Stored locally with SQLite. No account, no cloud, no tracking. Nobody — including me — sees what you log.',
    'features.three.title': 'Minimal, multilingual',
    'features.three.body':
      'Traditional Chinese, Simplified Chinese, English, Japanese. Visual emoji categories. Open and go.',

    'screenshots.title': 'Looks like this',
    'screenshots.subtitle': 'Actual app screenshots',
    'screenshots.home': 'Home & total assets',
    'screenshots.add': 'Log in seconds',
    'screenshots.stats': 'Monthly stats',

    'about.title': 'About this project',
    'about.body':
      "This is a side project I built while practicing AI-assisted coding.\nThe original goal was to solve my own problem: I used to log expenses only at night on my laptop, and by then I’d forgotten half of them. So I built a mobile version where you log it the moment you spend.\nTurned out my friends wanted it too, so I put it out there. No fees, no data selling, no ads.\nGot feedback? Drop by the FB page and let me know.",

    'faq.title': 'FAQ',
    'faq.q1': 'Do I need an account?',
    'faq.a1': 'No. Open and use. Data is saved locally on your phone.',
    'faq.q2': 'Is data uploaded to the cloud?',
    'faq.a2': "No. Fully local. Even I don't see what you log.",
    'faq.q3': 'What about switching phones?',
    'faq.a3':
      'No cloud sync yet (by design — privacy first). Backup/export is in the pipeline for the next release.',
    'faq.q4': 'Will it cost money someday?',
    'faq.a4': "No plans. It's a practice project, not a business.",

    'footer.tagline': 'Log it the moment you spend',
    'footer.madeBy': 'Built with AI-assisted coding',
    'footer.contact': 'Have feedback?',
    'footer.contact.fb': 'FB page',
    'footer.copyright': '© 2026 OhMyLedger',

    'lang.switcher': 'Language',
  },

  ja: {
    'brand.name': 'OhMyLedger',
    'meta.title': 'OhMyLedger · 使った瞬間に記録できる家計簿',
    'meta.description':
      '外出先でその場で記録できるシンプルな家計簿アプリ。データは端末のみに保存、クラウドなし、追跡なし、広告なし。',

    'nav.features': '機能',
    'nav.about': 'このアプリについて',
    'nav.faq': 'よくある質問',

    'hero.headline': '寝る前に思い出して\n家計簿つけてませんか？',
    'hero.subhead':
      'OhMyLedger は使った瞬間に記録できる家計簿です。\nデータはあなたの端末だけに保存。アカウントなし、クラウドなし、広告なし。',
    'hero.cta.primary': '無料ダウンロード',
    'hero.cta.secondary': '使い方を見る',
    'hero.badge': '個人プロジェクト · 無料',

    'features.title': 'なぜこのアプリ？',
    'features.subtitle': '小さくて現実的な課題を解決。',
    'features.one.title': 'その場で記録',
    'features.one.body':
      '食事、給油、支払い——終わった瞬間にタップして3秒で完了。夜に思い出す必要なし。',
    'features.two.title': 'データは端末のみ',
    'features.two.body':
      'SQLite でローカル保存。アカウント不要、クラウドなし、追跡なし。作者も含め誰もあなたの記録を見ません。',
    'features.three.title': 'シンプル・多言語',
    'features.three.body':
      '繁体字中国語・簡体字中国語・英語・日本語対応。絵文字カテゴリで直感的。',

    'screenshots.title': 'こんな感じ',
    'screenshots.subtitle': '実際のアプリ画面',
    'screenshots.home': 'ホームと総資産',
    'screenshots.add': '3秒で入力',
    'screenshots.stats': '月次統計',

    'about.title': 'このプロジェクトについて',
    'about.body':
      'AI 協働プログラミングの練習として作った小さなプロジェクトです。\n元々は自分の悩みを解決するためでした：毎日帰宅してからパソコンで記録していたけど、半分は忘れていた。それでその場で記録できるモバイル版を作りました。\n作ってみたら友達も欲しがったので公開することにしました。無料で、データ販売もしません、広告もありません。\nご意見があればぜひFBページまで。',

    'faq.title': 'よくある質問',
    'faq.q1': 'アカウント登録は必要ですか？',
    'faq.a1': '不要です。開いてすぐ使えます。データは端末に保存されます。',
    'faq.q2': 'データはクラウドにアップロードされますか？',
    'faq.a2': 'されません。完全にローカル保存。作者も見えません。',
    'faq.q3': '機種変更のときは？',
    'faq.a3':
      '現在クラウド同期はありません（プライバシー優先のため）。次のバージョンでバックアップ／エクスポート機能を予定しています。',
    'faq.q4': '将来的に有料になりますか？',
    'faq.a4': '予定はありません。練習プロジェクトであり、ビジネスではありません。',

    'footer.tagline': '使った瞬間に記録',
    'footer.madeBy': 'AI 協働プログラミングで制作',
    'footer.contact': 'ご意見・ご要望',
    'footer.contact.fb': 'FB ページ',
    'footer.copyright': '© 2026 OhMyLedger',

    'lang.switcher': '言語',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
