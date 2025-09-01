

import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
           <div className='Home-page'>
           
            <nav className="header-nav">
                {/* logo */}
                <img src="https://img.freepik.com/free-vector/book-logo-template_23-2149676821.jpg?t=st=1746804772~exp=1746808372~hmac=baeea08850164089472fd1cd13109a7b1c0e09530c2eb08b4f0307b2c92a99e6&w=900" 
                     alt=" logo-image"/>

                
                {/* nav-itmes */}
                <ul>
                    <a href=' #'> <li> 🔍︎ Search</li></a>
                    <Link to="/"><li>Home</li></Link>
                    
                    <Link to="/about"><li>About</li></Link>

                    <Link to="/contact"><li>Contact Us</li></Link>
                    <h2 style={{color:'red',fontSize:'16px'}}>👨🏻‍💻Hemalatha </h2>
                </ul>
            </nav>

            {/* encourage sentence */}

            <div className='enc-para'>
                <h1>Find Your Book Of Choice </h1>
                <h3>⪼------------------------➢</h3><br/>

                <p>Books are windows to endless worlds.<br/>
                   With every page, your mind grows stronger.<br/>
                   Stories spark imagination and wonder.<br/>
                   Reading feeds your dreams and curiosity.<br/>
                   So open a book—and let the journey begin!!!</p>
        
            </div>



    
    </div>
        
        </>
    )
}
export default Header;