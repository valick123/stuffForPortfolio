import React from 'react';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { Main } from './mainContent.component';



export const AppComponent = props =>{
    
    
        return(   
           <>
                <HeaderComponent/>
                <Main/>
                <FooterComponent/>
           </>      
        )
    
}