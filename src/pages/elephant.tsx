import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Elephant = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  let id = searchParams.get("id");

  const fetchData = () => {
    setLoading(true);
    fetch(`https://acumen-elephantom.herokuapp.com/elephants/id/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className=" ml-[5%] lg:ml-[55px] mt-[27px] mb-[150px] w-[90%] max-w-[934px] flex flex-col justify-center lg:items-start ">
      {loading ? (
        <div className="w-full h-[500px] flex text-bold font-overpass items-center justify-center text-3xl ">
          loading...
        </div>
      ) : (
        <>
          <div className="w-full h-[431px] mb-[43px] border">
            <img
              src={data?.image}
              alt={data?.name}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="flex w-full items-center pb-[16px] border-b border-[rgba(196,205,213,0.62)]">
            <p className="font-overpass font-bold text-[48px] leading-[61px] text-[#30425A]">
              {data?.name}
            </p>
            <span className="font-overpass font-normal text-[14px] leading-[23px] ml-[23px] text-[#30425A]">
              {data?.sex}
            </span>
          </div>
          <p className="w-full pt-[20px] font-normal text-[24px] leading-[30px] text-[#30425A] font-overpass mb-[100px]">
            {data?.note}
          </p>
        </>
      )}
      {/* <div className="w-full h-[431px] mb-[43px] border">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="flex w-full items-center pb-[16px] border-b border-[rgba(196,205,213,0.62)]">
        <p className="font-overpass font-bold text-[48px] leading-[61px] text-[#30425A]">
          {data?.name}
        </p>
        <span className="font-overpass font-normal text-[14px] leading-[23px] ml-[23px] text-[#30425A]">
          {data?.sex}
        </span>
      </div>
      <p className="w-full pt-[20px] font-normal text-[24px] leading-[30px] text-[#30425A] font-overpass mb-[100px]">
        {data?.note}
      </p> */}
    </section>
  );
};

export default Elephant;
