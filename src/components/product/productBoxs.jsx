import { FaPills } from "react-icons/fa";
import CustomTable from "@/utils/table";

export default function ProductBoxs({ medicineData }) {
  return (
    <div className="bg-white p-6 rounded-md ">
      <div class="bg-blue-100 p-10 my-10 md:p-10 rounded-md relative">
        <h1 class="text-3xl flex flex-row text-center font-bold mb-16 sm:text-base sm:mb-5 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:whitespace-nowrap">
          <span className="sm:hidden">
            <FaPills size={36} />
          </span>
          <span>전체 약품에 대한 정보입니다.</span>
        </h1>
      </div>
      <CustomTable data={medicineData} />
    </div>
  );
}
