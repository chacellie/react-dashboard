

const Header = () => {

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a href="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">CHACELLIE</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100" type="text" placeholder="검색어를 입력해주세요.." />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3">-</a>
                </div>
            </div>

        </header>
    )

}


export default Header;