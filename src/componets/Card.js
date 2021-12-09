import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import FormDialog from "./Modal";

export default function CardDot({img, title, text, places, center}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (

        <Card sx={{maxWidth: 345, margin: 'auto'}} >
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                    style={{margin: 'auto', width: '50%', marginTop: '1em'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {text}
                    </Typography>
                    <h5>¿Qué se puede reciclar aquí?</h5>
                    <Typography variant="body1" color="text.secondary">
                        {places}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <FormDialog open={open}
                        handleClose={handleClose}
                        lat={center.lat}
                        long={center.lng}
                        text={text}/>
        </Card>
    )
}