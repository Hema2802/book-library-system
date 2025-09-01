

import{ useRouteError} from 'react-router-dom'

function Error(){
    // if the page route is wrong -display the error
    const err=useRouteError();
    console.log(err);
    return(


        <>
        <div className="error-part">
            {/* error content */}
             <h1>Oops! You entered wrong path</h1>
             <h2>Please kindly recheck your URL </h2>
             {/* err message fetching from useRouteError hook */}
             <p>{err.status} {err.statusText}</p>
             <p>{err.data}</p>
             {/* error gif */}
             <img src='https://assets-v2.lottiefiles.com/a/39cee570-1164-11ee-ab76-7fb431ce1557/ZTUCtByuul.gif' />
        </div>
        
        
        
        </>
    )
}

export default Error;