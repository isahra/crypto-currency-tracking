import React from 'react';
import spinnerimg from '../../assets/images/spinner.gif';
const SpinnerComponent = () => {
    return ( 
        <div className="spinner d-flex justify-content-center align-items-center">
            <img src={spinnerimg} alt="" />
        </div>
     );
}
 
export default SpinnerComponent;