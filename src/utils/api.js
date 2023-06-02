const API_URL = 'http://localhost:5000/'
const MAP_URL = 'https://restapi.amap.com/v3/'
const MAP_KEY = 'bec6087fa4493c0d06d5ffd2085001f2'
function unicodeToChar (text) {
  return text.replace(/\\u[\dA-F]{4}/gi,
    function (match) {
      return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16))
    })
}
const helpers = {
  fetchCsvAsString: async function (fileName) {
    try {
      const response = await fetch(API_URL + 'file/' + fileName)
      if (!response.ok) {
        throw new Error(`Failed to fetch CSV file (${response.status} ${response.statusText})`)
      }

      const csvString = await response.text()
      return csvString
    } catch (error) {
      console.error('Error fetching CSV file:', error)
      throw error
    }
  },
  fetchChatResult: async function (start, end, instructions) {
    try {
      const response = await fetch(`${API_URL}chat?start=${start}&end=${end}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(instructions)
      })
      const text = await response.text()
      return unicodeToChar(text)
    } catch (error) {
      return console.error(error)
    }
  },
  fetchHints: async function (keywords) {
    try {
      const response = await fetch(`${MAP_URL}assistant/inputtips?key=${MAP_KEY}&keywords=${keywords}&city=深圳&citylimit=true`, {
        method: 'GET'
      })
      if (response.ok) {
        return response.json()
      }
    } catch (error) {
      return console.error(error)
    }
  },
  fetchNavi: async function (origin, destination) {
    try {
      const response = await fetch(`${MAP_URL}direction/driving?key=${MAP_KEY}&origin=${origin}&destination=${destination}&extensions=base&strategy=4`, {
        method: 'GET'
      })
      if (response.ok) {
        return response.json()
      }
    } catch (error) {
      return console.error(error)
    }
  }
}



export default helpers;

