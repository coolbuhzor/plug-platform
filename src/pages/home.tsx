import React, { useState, useEffect } from "react";
import Pagination from "../components/pagination/pagination";
import { useNavigate, createSearchParams } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const fetchData = () => {
    setLoading(true);
    fetch("https://acumen-elephantom.herokuapp.com/elephants/asian")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
      });
  };

  const navigate = useNavigate();

  const handleClick = (id: any) => {
    navigate({
      pathname: "/elephant",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full  mt-[3.75rem] px-[2.188rem] pb-[200px]">
      {loading ? (
        <div className="w-full bg-white h-[500px] flex text-bold font-overpass items-center justify-center text-3xl shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)]">
          loading...
        </div>
      ) : (
        <div className="w-full bg-white h-[734px] relative overflow-x-auto shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)]">
          <p className=" font-bold font-overpass  pt-[26px] pb-[21px] pl-[27px]">
            All Elephants
          </p>
          <div className="w-full overflow-x-auto h-[570px]">
            <table className="w-full text-left ">
              <thead className=" bg-[#E5E5E5]">
                <tr className="cursor-pointer">
                  <th className="font-overpass font-normal text-[18px] leading-[23px] text-black px-8 py-6">
                    S/N
                  </th>
                  <th className="font-overpass font-normal text-[18px] leading-[23px] text-black px-8 py-6">
                    Name
                  </th>
                  <th className="font-overpass font-normal text-[18px] leading-[23px] text-black px-8 py-6">
                    Sex
                  </th>
                  <th className="font-overpass font-normal text-[18px] leading-[23px] text-black px-8 py-6">
                    Species
                  </th>
                  <th className="font-overpass font-normal text-[18px] leading-[23px] text-black px-8 py-6">
                    Affiliation
                  </th>
                  <th className="font-overpass font-normal text-[18px] leading-[23px] text-black px-8 py-6">
                    Dob
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                {currentPost.map((item: any, index: number) => (
                  <tr
                    className={`h-[61px] cursor-pointer  ${
                      index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"
                    }`}
                    onClick={() => handleClick(item._id)}
                    key={item._id}
                  >
                    <td className="font-overpass font-normal text-[16px] leading-[20px] text-[#848383] px-8  max-w-[50px]">
                      {index + 1}
                    </td>
                    <td className="font-overpass font-normal text-[16px] leading-[20px] px-8 truncate  max-w-[50px]  text-[#848383] ">
                      {item.name}
                    </td>
                    <td className="font-overpass font-normal text-[16px] leading-[20px] px-8  text-[#848383] max-w-[50px] ">
                      {item.sex}
                    </td>
                    <td className="font-overpass font-normal text-[16px] leading-[20px] px-8  text-[#848383] max-w-[50px]">
                      {item.species}
                    </td>
                    <td className="font-overpass font-normal text-[16px] leading-[20px] px-8  text-[#848383] truncate max-w-[100px] ">
                      {item.affiliation}
                    </td>
                    <td className="font-overpass font-normal text-[16px] leading-[20px]  px-8 text-[#848383] ">
                      {item.dob}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="absolute left-0 bottom-[29px] flex items-center w-full">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data?.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
