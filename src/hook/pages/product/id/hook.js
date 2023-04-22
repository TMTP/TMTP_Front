function useProductDetailId() {
  const data = [
    "품목 일련번호",
    "품목 목적",
    "품목 모양",
    "품목 색상",
    "클래스 넘버",
    "클래스 이름",
    "PERMIT DATE",
    "품목 제형",
  ];
  const properties = {
    "품목 일련번호": "item_SEQ",
    "품목 목적": "class_NAME",
    "품목 모양": "drug_SHAPE",
    "품목 색상": "color_CLASS1",
    "클래스 넘버": "class_NO",
    "클래스 이름": "class_NAME",
    "PERMIT DATE": "item_PERMIT_DATE",
    "품목 제형": "form_CODE_NAME",
  };

  return { data, properties };
}

export default useProductDetailId;
