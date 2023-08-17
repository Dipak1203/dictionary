// Fetching api using

export const fetchApiData = async (searchTerm: string) => {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
    const jsonData = await response.json()
    // console.log({jsonData})
    return jsonData
  } catch (error: any) {
    console.error('Error fetching data:', error)
    throw error
  }
}
