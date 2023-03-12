function useNavbarDetail() {
  const data = [
    {
      name: "약품 정보",
      url: "/search",
    },
    {
      name: "약품 성분",
      url: "/dd",
    },
  ];
  return { data };
}

export default useNavbarDetail;
