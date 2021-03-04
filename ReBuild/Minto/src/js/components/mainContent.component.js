import React from "react";
import { InfoCard } from "./infoCard.component";
import { SimpleSlider } from "./layout/slider.component";
import { NoteBlock } from "./noteBlock.component";
import { Partners } from "./partners.component";
import { Separator } from "./separator.component";

export const Main = props => {
    return(
        <main className="main">
            <div className="content">
                <SimpleSlider/>
                <NoteBlock/>
                <InfoCard/>
                <Separator/>
                <Partners/>
            </div>
            
        </main>
    )
}