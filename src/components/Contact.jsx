

// importing hooks and component
import { useRef } from "react";
function Contact(){

    const contactRef=useRef(null)
        
    // scroll to reach the contact part
        setTimeout(() => {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
    return(


        <>
            <div className="contact-page" ref={contactRef}>
                {/* heading */}
                 <h1>☏ Contact Us</h1>  
                 <p className="contact-para">Our support team is available Monday to Friday, 9 AM – 6 PM (EST).</p>
                  <div className="contact-details">
                    <div className="first-contact">
                        {/* address and contact details */}
                        <p>Have questions, feedback, or need help? We’d love to hear from you!<br/>
                           Phone: +1 (555) 123-4567<br/>
                           Email: support@onlinebooklibrary.com</p>
                    </div>
                    <div className="second-contact">

                       
                        <p>Address: <br/>123 Book Lane,<br/> Library City,<br/> NY 10001,<br/> USA</p>
                    </div>
                  </div>

            </div>
        
        
        </>
    )
}

export default Contact;