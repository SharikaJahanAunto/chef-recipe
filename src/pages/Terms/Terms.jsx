import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sed recusandae esse facere quibusdam, odit suscipit numquam totam error cupiditate, eaque repudiandae fugit exercitationem voluptate debitis, ad minima temporibus quae!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;