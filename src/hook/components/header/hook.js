function useHeaderDetail() {
  const title = "TMTP 이약저약";

  const data = [
    {
      name: "약품 정보",
      url: "/product",
    },
  ];

  return { title, data };
}

export default useHeaderDetail;
