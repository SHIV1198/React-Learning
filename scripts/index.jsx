//import React from "react";
//import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import MainContent from "./MainContent";
import Footer from "./Footer.jsx"

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);   //can use page() also as it is basically java fn but use react syntax

// //Each of these comp. can have their own file to organise it
// //and import it. Eg: do for header.
function Page() {
    return(
        <div className="index_div">
            <Header/>
            <MainContent>
                
            </MainContent>
            <Footer/>
        </div>
    )
}
/*
function Header() {     
    return(
        <header>
            <nav className='nav'>
                <img className='logo' src="images/download.jpg"></img> 
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
};  */

// function Footer() {
//     return(
//         <footer className='footer'>
//             <small>Footer using React 18; createRoot API</small>
//         </footer>
//     )
// }

// function MainContent() {
//     return(
//         <div className='main'>
//             <h1>Minimal React-App using React CDNs</h1>
//             <h2>Learning react App- Without using creat-react-app cmd</h2>
//             <ol className="sa">
//                 <li>Using CDN: directly using react in web page</li>
//                 <li>Link react CDN, babel for JSX processing, and js file for writing comp.</li>
//                 <li>Each funtional comp can only ret. 1 HTML ele(for multiple ele enclose in div.)</li>
//                 <li>For styling we use className instead of class in elements.</li>
//             </ol>
//         </div>
//     )
// }

function Card() {
    return(
        <div>
            <img src='' />
            <h4>Card Title</h4>
            <p>Card Information</p>
        </div>
    )
}