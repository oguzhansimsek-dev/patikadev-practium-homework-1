import getData from "./app.js";

try {
  const res = await getData();
  console.log(res);
} catch (e) {
  console.log(e.response.statusText);
}
