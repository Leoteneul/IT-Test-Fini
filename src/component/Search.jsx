import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { getCountryByLang } from '../hooks/ApiHook'

function Search({ setCountryByLang }) {
	const [searchContent, setSearchContent] = useState('')

	function handleSearch() {
		getCountryByLang(setCountryByLang, searchContent)
	}

	return (
		<div className="search">
			<h1>Ma super page de recherche</h1>

			<div className="search__bar">
				<input
					type="text"
					placeholder="Rechercher par langue"
					onChange={(e) => setSearchContent(e.target.value)}
					id="searchBar"
				></input>
				<FontAwesomeIcon
					className="search__bar--icon"
					icon={faMagnifyingGlass}
					onClick={handleSearch}
				/>
			</div>
		</div>
	)
}

export default Search