

function Header() {
	return (
		<header>
			<img src="logo.svg" alt="logo site" className="header__img" />
			<div className="navBar">
				<button className="navBar__button" onClick={() => window.location.reload()}>
					ACCUEIL
				</button>
				<button className="navBar__button">RECHERCHE</button>
			</div>
		</header>
	)
}

export default Header