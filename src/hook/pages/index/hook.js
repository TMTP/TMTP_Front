function useIndexDetail() {
  const data = {
    shapeBox: {
      title: "모양 검색 창",
      description: "약품의 색깔과 모양으로 쉽게 검색가능",
    },

    compareBox: {
      title: "먹는 약 검색하기",
      description:
        "같이 복용하게 되는 의약품을 입력하면, 의약품간의 금기나 사용(급여)중지, 중복여부를 확인할 수 있습니다.",
    },
  };

  return { data };
}

export default useIndexDetail;
