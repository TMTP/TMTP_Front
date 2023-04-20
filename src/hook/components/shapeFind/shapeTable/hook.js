function useShapeTableDetail() {
  const baseName = ["모양 선택", "제형 선택", "분할선 선택"];
  const drug = {
    shape: [
      "원형",
      "타원형",
      "장방형",
      "반원형",
      "삼각형",
      "사각형",
      "마름모형",
      "오각형",
      "육각형",
      "팔각형",
    ],
    form: ["정제", "경질캡슐", "연질캡슐"],
    splitLine: ["+", "-"],
  };
  return { baseName, drug };
}

export default useShapeTableDetail;
