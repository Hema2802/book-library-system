
import { useRef } from "react";   //useRef Hook for scrolling or moving to needed part

function About(){

    const aboutRef=useRef(null)   

    setTimeout(() => {   // setting time delay and behaviour of scrolling
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    return(


        <>  
        {/* about my application */}
             <div className="about-page" ref={aboutRef}>
                    <h1>──── ୨୧ ────Digital Library Hub ──── ୨୧ ────</h1>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/022/817/109/small/e-learning-education-or-internet-library-generative-ai-photo.jpeg" />
                    <h2>📜ABOUT US</h2>
                    <p>Welcome to the Online Book Library, your digital gateway to a world of knowledge and imagination.
                       At Online Book Library, our mission is to make reading accessible to everyone, anytime and anywhere. 
                       Whether you're a passionate bookworm, a student seeking academic resources, or someone discovering the 
                      joy of reading, our platform offers a wide variety of books across genres to suit every reader’s 
                       interest.</p>

                    <h2>🎯Key Features</h2>

                  

                    <p><span>Browse & Discover:</span> Explore a vast collection of books with detailed descriptions and categories. <br/> 

                       <span>Search & Filter:</span> Quickly find books by title, author, or genre.<br/>

                       <span>Add New Books:</span> Users and administrators can contribute by adding new books to the library.<br/>

                       <span>Responsive Design:</span> Enjoy seamless reading experiences across devices.<br/>

                        <span>User-Friendly Interface:</span> Simple navigation and intuitive layout for easy access to your favorite books.</p>

                        <h2>🚀Our Vision</h2>
                        <p>We believe in the power of books to inspire, educate, and transform. Our goal is to build a 
                            community of readers and learners who can connect and grow through shared knowledge.<br/>

                           <span style={{textAlign:'center', fontSize:'20px',fontWeight:'500',paddingLeft:'280px'}}>🙏🏼 Thank you for being a part of our reading community!💐</span></p>
             
        
                </div>
        </>
    )
}

export default About;