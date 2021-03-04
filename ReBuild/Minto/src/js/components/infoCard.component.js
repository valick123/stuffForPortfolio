import React from "react";
import {CardImgLayer,CardImg} from "../images";
export const InfoCard = props => {
    return(
        <div className="info-card">
            <div className="info-card-img">
                <img src={CardImg} alt="" style={{backgroundImage:`url(${CardImgLayer})`}} />
            </div>
            <div className="info-card-content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate, asperiores minus dolores nemo hic illo accusantium nulla pariatur reprehenderit deleniti recusandae voluptatem neque odio.
                    Sunt eum velit unde,
                    veritatis esse nostrum in aspernatur ab similique quisquam temporibus repellat animi amet dolores atque voluptas,
                    corrupti alias vel assumenda cum dicta nulla. Ipsa asperiores cupiditate consequatur beatae modi rem incidunt nulla tempora natus,
                    facilis cum dolor consectetur eaque quae recusandae, soluta vitae placeat provident culpa?
                    Voluptatem sed praesentium veritatis dolor atque laboriosam sit ullam illo ipsa. 
                    Recusandae error sunt enim illum nisi perspiciatis est animi commodi praesentium accusantium, ducimus dolore voluptate maiores!</p>
            </div>
        </div>
    )
}