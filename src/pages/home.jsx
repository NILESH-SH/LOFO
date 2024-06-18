import Card from "../components/card";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <>
    <NavBar/>
      <main className="max-w-7xl m-auto p-3"><h1>Home</h1></main>
        {/* <Card heading={"lost"}></Card> */}
        <Card heading={"lost"} img={'https://www.ncuindia.edu/wp-content/uploads/2023/01/logo-ncu-home.png'}></Card>

    </>
  );
}
