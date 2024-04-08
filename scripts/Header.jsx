
export default function Header() {     
    return(
        <header>
            <nav className='nav'>
                <img className='logo' src="../assets/download.jpg"></img> 
                <h2>My ReactApp</h2>                
                <div className='nav-container'>
                    
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>More</li>
                    </ul>
                
                </div>
            </nav>
        </header>
    )
};


