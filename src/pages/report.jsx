import NavBar from "../components/navbar";

export default function Report() {
  return (
    <>
      <NavBar />
      <div className=" flex justify-center p-4 min-h-screen">
        <div className="bg-white rounded-xl max-w-[600px] h-full flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl font-bold m-5">REPORT A LOST ITEM</h1>
          <form action="" method="post" className="flex flex-col px-5 gap-2">
            <input type="text" placeholder="Item Name" id="itemName" className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"/>
            <select name="" id="location" className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg">
              <option value="">Location</option>
              <option value="sportRoom">Sport Room</option>
              <option value="cricketGround">Cricket Ground</option>
              <option value="cafe10">Cafe 10</option>
              <option value="cafe1">Cafe 1</option>
              <option value="cadLab">Cad Lab</option>
            </select>
            <select name="" id="category" className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg">
              <option value="">Catogory</option>
              <option value="electronic">Electronic</option>
              <option value="notebook">Notebook</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="sport">Sport</option>
            </select>
            <input type="date" id="date"  className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"/>
            <input type="file" id="file"  className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"/>
            <textarea id="description" className="bg-gray-100 px-3 py-2 rounded-2xl outline-none text-lg"></textarea>
            <div className="flex gap-2 px-3 py-5">
              <input type="button" value="Cancel"  className="w-full bg-primary rounded-xl text-white text-xl"/>
              <input type="submit" value="Submit" className="w-full bg-primary rounded-xl text-white text-xl"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
