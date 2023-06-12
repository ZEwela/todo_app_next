export async function getHistory(elements = 30) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/history/records?page=1&perPage=${elements}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}
