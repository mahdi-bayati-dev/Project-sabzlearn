import React from "react";
import './FooterItem.css'

function FooterItem({title , children}) {
    return ( 
    <>
    <div class="col-4">
              <div class="footer-widgets__item">
                <span class="footer-widgets__title">
            {title}
                </span>
                {children}

              </div>
            </div>
    </>
 );
}

export default FooterItem;