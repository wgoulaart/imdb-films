import axios from 'axios'

const options = {
  method: 'GET',
  url: process.env.NEXT_PUBLIC_URL,
  params: { ids: 'tt11245972&ids=tt0234215 ', region: 'US' },
  headers: {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_HEADERS_HOST,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_HEADERS_KEY
  }
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
