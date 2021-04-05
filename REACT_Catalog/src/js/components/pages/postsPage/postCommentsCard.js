import React from "react";
import { Card, CardBody, CardLink, CardText, CardTitle } from "reactstrap";


export const CommentCard = props => {
    return(
        <Card className="mb-2">
            <CardBody>
                <CardTitle>
                    {
                        props.comment.name
                    }
                </CardTitle>
                <CardText>
                    {
                        props.comment.body
                    }
                </CardText>
                <CardLink href={`mailto:${props.comment.email}`}>
                    {
                        props.comment.email
                    }
                </CardLink>
            </CardBody>
        </Card>
    )
}