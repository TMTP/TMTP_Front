import CustomTable from "@/utils/table";

export default function MainSearch({ medicineData, searchQuery }) {
  const filteredData = medicineData.filter(
    (item) =>
      item.item_NAME.includes(searchQuery) ||
      item.item_SEQ.toString().includes(searchQuery)
  );

  return (
    <main>
      <div className="bg-white p-6 rounded-md ">
        <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
          {searchQuery}로 검색한 결과입니다.
        </h1>
      </div>
      <div className="bg-white p-6">
        <CustomTable data={filteredData} />
      </div>
    </main>
  );
}
