export function getBarchartData() {
    return new Promise((res, rej)=> {
        fetch("/json/barchart.json")
        .then(apiRes => apiRes.json())
        .then(jsonData => res(jsonData))
        .catch(err => rej(err));
    });
}