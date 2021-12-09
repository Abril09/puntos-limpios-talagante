import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Map from "./Maps";


export default function FormDialog({open, handleClose, lat, long, text}) {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Detalle.</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{marginBottom: '1em'}}>
                        {text}
                    </DialogContentText>
                    <Map lat={lat} long={long}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}