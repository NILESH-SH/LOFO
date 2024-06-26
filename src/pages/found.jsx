import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import { FaSearch } from "react-icons/fa";
import data from "../dummyData/foundDummyData";

export default function Found() {
  const [search, setSearch] = useState("Search Item");
  const [selectCategory, setSelectCategory] = useState("All");
  let [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    selectCategory === "All"
      ? setFilteredData(data)
      : setFilteredData(
          data.filter((item) => item.itemStatus === selectCategory)
        );
        console.log(filteredData,selectCategory);
      }, [selectCategory]);
      
  function handleSearch(params) {
    console.log(data[1]);
  }
  function sortItem(e) {
    e.preventDefault();
  }
  return (
    <>
      <NavBar />
      <div className=" flex flex-col mx-1 items-center p-4 min-h-screen">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold ">Found Inventory</h1>
          <h6 className="mt-1 mb-3 text-sm">List of items that are found</h6>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <span className="flex justify-center items-center gap-1 bg-secondary py-1 px-3 rounded-xl">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="search"
                className="bg-transparent outline-none"
              />
              <FaSearch onClick={handleSearch} />
            </span>
          </form>
        </div>
        <div className=" flex gap-6">
          <button className="flex flex-col items-center justify-center bg-secondary rounded-lg h-[100px] w-[100px] p-3 hover:opacity-60 cursor-pointer">
            <img
              src="./src/assets/image 20.png"
              alt="error"
              className="h-10 "
            />
            <h1 className="text-center my-1 mt-2 font-semibold">Specs</h1>
          </button>
          <button className="flex flex-col items-center justify-center bg-secondary rounded-lg h-[100px] w-[100px] p-3 hover:opacity-60 cursor-pointer">
            <img
              src="./src/assets/image 21.png"
              alt="error"
              className="h-10 "
            />
            <h1 className="text-center my-1 mt-2 font-semibold">Specs</h1>
          </button>
          <button className="flex flex-col items-center justify-center bg-secondary rounded-lg h-[100px] w-[100px] p-3 hover:opacity-60 cursor-pointer">
            <img
              src="./src/assets/image 29.png"
              alt="error"
              className="h-10 "
            />
            <h1 className="text-center my-1 mt-2 font-semibold">Specs</h1>
          </button>
          <button className="flex flex-col items-center justify-center bg-secondary rounded-lg h-[100px] w-[100px] p-3 hover:opacity-60 cursor-pointer">
            <img
              src="./src/assets/image 31.png"
              alt="error"
              className="h-10 "
            />
            <h1 className="text-center my-1 mt-2 font-semibold">Specs</h1>
          </button>
          <button className="flex flex-col items-center justify-center bg-secondary rounded-lg h-[100px] w-[100px]  p-3 hover:opacity-60 cursor-pointer">
            <img
              src="./src/assets/image 37.png"
              alt="error"
              className="h-10 "
            />
            <h1 className="text-center my-1 mt-2 font-semibold">Specs</h1>
          </button>
        </div>
        <div className="w-screen h-[1px] bg-black mt-10 mb-5"></div>
        <section className="w-full flex justify-end">
          <form onSubmit={(e) => sortItem()}>
            <select
              className="px-3 py-1 font-medium"
              name=""
              id="sortId"
              value={selectCategory}
              onChange={(e) => setSelectCategory(e.target.value)}
            >
              <option value="All" >
                ALL
              </option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="claimed">Claimed</option>
              <option value="unclaimed">Unclaimed</option>
            </select>
          </form>
        </section>
        <div className="flex gap-5 max-w-4xl flex-col mt-5 ">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="relative flex gap-5 border-2 bg-secondary border-secondary shadow-md rounded-lg"
            >
              <section>
                <img src="./src/assets/Rectangle 14.png" alt="error" />
              </section>

              <section className="max-w-[500px]">
                <h1 className="text-2xl font-semibold mb-6 mt-5">
                  {item.itemName}
                </h1>
                <p className="mb-5">{item.itemDesc}</p>
                <section className="flex gap-20 font-semibold">
                  <section>
                    <p>Status : {item.itemStatus}</p>
                    <p>Category : {item.itemCategory}</p>
                  </section>
                  <section>
                    <p>Location : {item.itemLocation}</p>
                    <p>Date Lost : {item.itemDate}</p>
                  </section>
                </section>
                <section className="absolute bottom-1 w-96 ">
                  <div className="h-[1px] w-full bg-slate-800"></div>
                  <div className="flex justify-between items-end ">
                    <section>
                      <p>Claimed By : ABC</p>
                      <p>Email ID : ABC@ncuindia.edu</p>
                      <p>Phone NO : 67867886767</p>
                    </section>
                    <button className="bg-primary text-white text-xl rounded-xl px-5 py-1">
                      Claim
                    </button>
                  </div>
                </section>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
