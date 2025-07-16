const baseUrl = "https://rickandmortyapi.com/"

export const getCharacters = async () => {
    // const response = await fetch(`${baseUrl}/character`)
        const response = await fetch(`https://rickandmortyapi.com/api/character`)
        console.log('resp')
        console.log(response)
    const data = await response.json()
    return data.response
}