function useFooterDetail() {
  const data = [
    {
      name: "의약품 개요정보",
      url: "https://www.data.go.kr/data/15075057/openapi.do",
    },
    {
      name: "낱알 식별정보",
      url: "https://www.data.go.kr/data/15057639/openapi.do",
    },
  ];
  const copyright = [
    {
      name: "식품의약품안전처",
      url: "https://www.mfds.go.kr",
    },
  ];
  return { data, copyright };
}

export default useFooterDetail;
