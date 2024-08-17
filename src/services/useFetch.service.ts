
const baseUrl = 'http://localhost:3000'
export function apiGet(url: string) {
  return fetch(baseUrl + url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      return error;
    });
}

export function apiPost<T>(url: string, body: T) {
   return fetch(baseUrl + url, {
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
   }).then(response => response.json()).then((data) =>{
    console.log(data)
   })
}