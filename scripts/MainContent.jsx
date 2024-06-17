

export default function MainContent() {
    return(
        <div className='main'>
            <h1>React infomation site</h1>
            <h2>Minimal React app - Without using creat-react-app cmd</h2>
            <ul className="list_in_main">
                <li>Using CDN: directly using react in web page</li>
                <li>Link react CDN, babel for JSX processing, and js file for writing comp.</li>
                <li>React is declarative unlike Vanilla js which is imperative(you define each and every step to create, display an element on webpage)</li>
                <li>Each funtional comp can only ret. 1 HTML ele(for multiple ele enclose in div.)</li>
                <li>For styling we use className instead of class in elements.</li>
            </ul>
        </div>
    )
}