import fetch from "isomorphic-unfetch";

export async function fetchMedicineData() {
  const serviceKey = encodeURIComponent(
    "0aq5WhGCXd25lcajnThUxW94UFyuv1WV8clq1W42wiCaMegFEzoQbw18rbKMr2JInoFAOINkrOAPmSIMxpgDlw=="
  );
  const apiUrl = `https://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01?serviceKey=${serviceKey}&pageNo=1&numOfRows=100&type=json`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from API: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  return data;
}
