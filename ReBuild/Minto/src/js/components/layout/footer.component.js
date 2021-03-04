import React from 'react';
import { SocialBlock } from '../socialBlock.component';

export const FooterComponent = props =>{  
        
       

        return(
                <footer className="footer">
                        <div className="content">
                                <div className="footer__inner">
                                        <p className="copyrights">© Copyright 2010 - All rights reserved</p>
                                        <SocialBlock/>
                                </div>
                        </div>
                </footer>
        )
        
}