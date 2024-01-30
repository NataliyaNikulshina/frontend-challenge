// типизация запросов api
export interface IResponse<T> extends Response {
    json(): Promise<T>;
  }

const api = {
    baseUrl: "https://api.thecatapi.com",
    headers: {
      "Content-Type": "application/json",
      'x-api-key' : 'live_GynuACy8fxX45Jsv1inYdrXYbR04Vh1IBQ1GI583wbeLykbeglPLUW42rUEtZUZ4',
    },
  };
  
  export function checkRes<T>(res: IResponse<T>): Promise<T> | Promise<never> {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject([`Ошибка ${res.status}`, res.json()]);
  }

  export function getAllImages() {
    return fetch(`${api.baseUrl}/v1/images/search?limit=15`, {
      method: "GET",
      headers: api.headers,
    })
      .then((res) => checkRes(res));
  }