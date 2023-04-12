export const getQuotes = async() => {
    const response = await fetch("https://api.quotable.io/random",{
        method : "GET"
    })
    return await response.json();
}