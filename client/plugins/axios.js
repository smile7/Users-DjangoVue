export default function({ $axios, request }) {
    $axios.onRequest(req => {
      console.log('axios req')
      if (req.method !== 'get') {
        req.url = req.url.concat('/')
      }
  
      if (!(req.url.includes('login') || req.url.includes('logout'))) {
        req.headers.Authorization = localStorage.getItem('auth._token.local')
      }
    })
  }
  