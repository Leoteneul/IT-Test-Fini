import { useState, useEffect } from "react"
import { getAllCountry } from '../hooks/ApiHook'


function Country() {
	const [allCountry, setAllCountry] = useState([])

    useEffect(() => {
		getAllCountry(setAllCountry)
        
        
	}, [])
    console.log(allCountry)
	return (
		<div className="country">
            {allCountry.map(
				(
					{name, continents, flags}, index) => 
					(
					<div className="item" key={`${name}-${index}`}>
                        <img src={flags.png} alt="" />
						<p className="item__continent">{continents}</p>
                        <h2>{name.common}</h2>
                        <p className="item__lang">Liste des langues parlées:</p>

                        <button>Voir sur GoogleMap</button>
                        
                        
					</div>
				)
			)}
        </div>
	)
}



export default Country