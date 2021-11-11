import React from 'react';
import {Card,CardContent,Typography} from "@material-ui/core";

function Infobox({title,cases,total}) {
    return (
        <Card className="infobox">
           <CardContent >
               {/* title i.e corona virus cases */}
               <Typography className="infobox_title" color="textSecondary">
                {title}
               </Typography>
               {/* number of cases */}
               <h2 className="infobox_cases">{cases}</h2>
               {/* total */}
               <Typography className="infobox_total" color="textSecondary">{total}Total</Typography>
               </CardContent> 
        </Card>
    )
}

export default Infobox
