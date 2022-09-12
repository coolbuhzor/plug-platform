import React from "react";
import left from "../../assets/svg/left.svg";
import right from "../../assets/svg/right.svg";

type Props = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (text: number) => void;
  currentPage: number;
};

const Pagination = (props: Props) => {
  const { postsPerPage, totalPosts, paginate, currentPage } = props;
  const pageNumbers = [];
  const totalPage = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const next = () => {
    if (currentPage === totalPage) return;
    paginate(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;
    paginate(currentPage - 1);
  };

  return (
    <nav data-testid="pagination" className=" w-full ">
      {
        <div className="flex items-center justify-center w-full">
          <p className=" text-[#30425A] font-normal text-[14px] opacity-[0.9] leading-[15px] mr-[20px]">
            PAGE {currentPage} OF {totalPage}
          </p>
          <button
            className="mr-[8px] bg-[#919EAB] rounded-[4px] border-[#DFE3E8] w-[32px] h-[32px] flex items-center justify-center"
            onClick={prev}
          >
            <img src={left} alt="left-arrow" />
          </button>
          <button
            onClick={() => paginate(1)}
            className={`h-[32px] w-[32px] rounded-[4px] flex items-center justify-center align-middle  border-[#DFE3E8] bg-white mr-[9.5px] ${
              currentPage === 1
                ? " text-[#0546E0] border border-[#0546E0]"
                : " text-[#212B36] border border-[#DFE3E8]"
            }`}
          >
            <p className=" font-bold text-[14px] leading-[20px]">1</p>
          </button>
          <button
            className={`h-[32px] w-[32px] rounded-[4px] flex items-center justify-center align-middle  border-[#DFE3E8] bg-white mr-[9.5px] ${
              currentPage !== 1
                ? " text-[#0546E0] border border-[#0546E0]"
                : " text-[#212B36] border border-[#DFE3E8]"
            }`}
          >
            <p className=" font-bold text-[14px] leading-[20px]">
              {currentPage !== 1 ? currentPage : 2}
            </p>
          </button>
          <button
            className="border rounded-[4px] border-[#DFE3E8] w-[32px] h-[32px] flex items-center justify-center"
            onClick={next}
          >
            <img src={right} alt="left-arrow" />
          </button>
        </div>
      }
    </nav>
  );
};

export default Pagination;
