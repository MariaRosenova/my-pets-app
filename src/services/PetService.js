const baseUrl = 'http://pet-server-3f98fefb5dcf.herokuapp.com/jsonstore';

export const getAll =  async () => {
    let response = await fetch(`${baseUrl}/pets`)
    let pets = await response.json();
    let result = Object.values(pets);
    return result;
}