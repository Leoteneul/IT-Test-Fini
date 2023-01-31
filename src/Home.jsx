import Header from "./component/Header";
import Search from "./component/Search";
import Country from "./component/Country";
import { useState } from "react";


function Home() {
  const [countryByLang, setCountryByLang] = useState([])
  return (
    <div className="home">
      <Header />
      <Search setCountryByLang={setCountryByLang}/>
      <Country countryByLang={countryByLang}/>
    </div>
  );
}

export default Home;
