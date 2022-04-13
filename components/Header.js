import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <Link className='navbar-item' href='/' passHref>
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarItems">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarItems" className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
