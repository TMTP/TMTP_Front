import fetch from "isomorphic-unfetch";

export async function fetchMedicineData() {
  const apiUrl = "http://15.165.220.225:8080/sum_all";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from API: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  return data;
}
