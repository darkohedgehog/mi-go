export default function manifest() {
    return {
      name: 'Mi-Go || Kombucha',
      short_name: 'Mi-Go',
      description: 'Osvježavajuć napitak od fermentiranog zelenog čaja s bogatom probiotičkom kulturom i dodatkom sočne maline',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      "icons":[
        {"src":"/android-chrome-192x192.png",
        "sizes":"192x192",
        "type":"image/png"
        },
        {"src":"/android-chrome-512x512.png",
        "sizes":"512x512",
        "type":"image/png"
        },
        {"src":"/favicon-32x32.png",
        "sizes":"32x32",
        "type":"image/png"
        },
        {"src":"/favicon-16x16.png",
        "sizes":"16x16",
        "type":"image/png"
        }
        ],
    }
  }