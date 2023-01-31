import { useState, useEffect } from 'react'
import { getAllCountry } from '../hooks/ApiHook'

function Country({ countryByLang }) {
	const [allCountry, setAllCountry] = useState([])
	const [itemSlice, setItemSlice] = useState(250)

	function handleSlice() {
		setItemSlice(allCountry.length)
	}

	useEffect(() => {
		if (countryByLang.length === 0) {
			getAllCountry(setAllCountry)
			setItemSlice(250)

			return
		}
		setAllCountry(countryByLang)
		setItemSlice(3)
	}, [countryByLang])

	return (
		<div className="country">
			<div className="country__conteneur">
				{allCountry.slice(0, itemSlice).map((item, index) => (
					<div className="item" key={`${item.name}-${index}`}>
						<img src={item.flags.png} alt="" />
						<p className="item__continent">{item.continents}</p>
						<h2>{item.name.common}</h2>

						<p className="item__lang">
							Liste des langues parlées: <br />
							<br />
							{item.languages
								? Object.values(item.languages).join(', ')
								: 'Aucune information disponible'}
						</p>

						<button>Voir sur GoogleMap</button>
					</div>
				))}
			</div>

			{itemSlice === 3 ? <button onClick={handleSlice}>Voir Plus</button> : null}
		</div>
	)
}

export default Country