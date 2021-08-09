import axios from 'axios'
import constants from './constants'

export function getQueryParameters (name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[[]]/g, '\\$&')

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(url)

  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export async function GET (path) {
  return await axios({
    url: constants.API_BASE_URL + path,
    method: 'get'
  })
}

export async function POST (path, payload) {
    return await axios({
      url: constants.API_BASE_URL + path,
      method: 'post',
      data: payload
    })
  }