import React from "react";
import PropTypes from 'prop-types';
import { faCircleHalfStroke,faUser,faRotateRight } from '@fortawesome/free-solid-svg-icons';

import "./Footer.css" 

const Footer = (props) => {
    return (
        <div>
            <footer class="footer">
                <div class="container text-center">
                    <p>© 2024 Liwa Soft - <a href="http://www.liwasoft.com">www.liwasoft.com</a> - <a href="tel:08508407807">0850 840 78 07</a></p>
                </div>
            </footer>
        </div>
      );
}
 
export default Footer;