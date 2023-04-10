function useColorTableDetail() {
  const data = [
    { name: "하양", colorClass: "bg-gray-100" },
    { name: "노랑", colorClass: "bg-yellow-400" },
    { name: "주황", colorClass: "bg-orange-400" },
    { name: "분홍", colorClass: "bg-pink-400" },
    { name: "빨강", colorClass: "bg-red-500" },
    { name: "갈색", colorClass: "bg-red-700" },
    { name: "연두", colorClass: "bg-green-200" },
    { name: "초록", colorClass: "bg-green-600" },
    { name: "청록", colorClass: "bg-cyan-800" },
    { name: "파랑", colorClass: "bg-blue-500" },
    { name: "남색", colorClass: "bg-blue-800" },
    { name: "자주", colorClass: "bg-purple-800" },
    { name: "보라", colorClass: "bg-purple-600" },
    { name: "회색", colorClass: "bg-gray-500" },
    { name: "검정", colorClass: "bg-black" },
    { name: "투명", colorClass: "bg-gray-100" },
  ];
  return { data };
}

export default useColorTableDetail;
