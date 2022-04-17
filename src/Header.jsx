import {theme} from './theme'

const Header = () => {
    return (
        <header style={{background: theme.green, borderBottomColor: theme.brown, borderBottomWidth: '5px', borderBottomStyle: 'dashed'}}>
            <h1>The Smith House</h1>
            <ul>
                <li><a href="check-in">Check in</a></li>
                <li><a href="music">Music</a></li>
                <li><a href="food">Food</a></li>
            </ul>
        </header>
    )
}

export default Header;