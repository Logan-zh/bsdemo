function Head(){
    return(
<header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div className="container">
        <a className="navbar-brand" href="#">泰山渡假飯店</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#room"><i className="mr-2 fas fa-bed"></i>房型介紹</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#facility"><i className="mr-2 fas fa-share-alt-square"></i>服務設施</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#collapse"><i className="mr-2 fas fa-pizza-slice"></i>餐飲美食</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#map"><i className="mr-2 fas fa-map-marked-alt"></i>交通資訊</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"><i className="mr-2 far fa-envelope"></i>聯絡我們</a>
              </li>
          </ul>
        </div>
    </div>
    </nav>
</header>
    )
}