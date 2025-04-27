import './Navbar.css';

function Navbar({list, onClick}){
    return (
        <ul className="nav-list">
            {list.map((item, index) =>
                    // <div className='flex'>
                        <li key= {index} className="nav-item"><a onClick={() => onClick(item)}> {item} </a></li>                     
                    
                )}  
        </ul>
    );
}

export default Navbar;