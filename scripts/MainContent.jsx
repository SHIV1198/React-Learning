

export default function MainContent() {
    return(
        <div className='main'>
            <h1>Minimal React-App using React CDNs</h1>
            <h2>Learning react App- Without using creat-react-app cmd</h2>
            <ol className="sa">
                <li>Using CDN: directly using react in web page</li>
                <li>Link react CDN, babel for JSX processing, and js file for writing comp.</li>
                <li>Each funtional comp can only ret. 1 HTML ele(for multiple ele enclose in div.)</li>
                <li>For styling we use className instead of class in elements.</li>
            </ol>
        </div>
    )
}