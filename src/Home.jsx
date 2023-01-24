import Header from "./component/Header";
import Search from "./component/Search";
import Country from "./component/Country";


function Home() {
  return (
    <div className="home">
      <Header />
      <Search />
      <Country />
    </div>
  );
}

export default Home;
