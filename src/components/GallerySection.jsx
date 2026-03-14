import React, {useState} from "react";
import {Box, Grid, CardMedia, Dialog, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Images} from "../constants/images.js";

const GallerySection = () => {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");

    const handleOpen = (img) => {
        setSelectedImg(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImg("");
    };

    const imageStyle = {
        width: "100%",
        borderRadius: 4,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {transform: "scale(1.02)"},
    };

    return (
        <Box sx={{py: {xs: 3, md: 3}}}>
            <Grid container spacing={2.5} alignItems="stretch">
                {/* LEFT COLUMN */}
                <Grid size={{xs: 12, md: 6}}>
                    <Grid container spacing={2.5} sx={{height: "100%"}}>
                        {/* Big top image */}
                        <Grid size={{xs: 12}}>
                            <CardMedia
                                component="img"
                                src={Images.GalleryHospitalImage}
                                alt="Hospital room"
                                onClick={() => handleOpen(Images.GalleryHospitalImage)}
                                sx={{
                                    ...imageStyle,
                                    aspectRatio: "16 / 6",
                                    objectFit: "fill",
                                }}
                            />
                        </Grid>

                        {/* two small images */}
                        <Grid size={{xs: 6}}>
                            <CardMedia
                                component="img"
                                src={Images.GalleryICU}
                                alt="Xray"
                                onClick={() => handleOpen(Images.GalleryICU)}
                                sx={{
                                    ...imageStyle,
                                    aspectRatio: "4 / 2",
                                    objectFit: "fill",
                                }}
                            />
                        </Grid>

                        <Grid size={{xs: 6}}>
                            <CardMedia
                                component="img"
                                src={Images.GalleryDoctorConsultation}
                                alt="NICU"
                                onClick={() => handleOpen(Images.GalleryDoctorConsultation)}
                                sx={{
                                    ...imageStyle,
                                    aspectRatio: "4 / 2",
                                    objectFit: "fill",
                                }}
                            />
                        </Grid>

                        {/* wide doctors image */}
                        <Grid size={{xs: 12}}>
                            <CardMedia
                                component="img"
                                src={Images.GalleryReception}
                                alt="Doctors team"
                                onClick={() => handleOpen(Images.GalleryReception)}
                                sx={{
                                    ...imageStyle,
                                    aspectRatio: "16 / 6",
                                    objectFit: "cover",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* RIGHT COLUMN */}
                <Grid size={{xs: 12, md: 6}}>
                    <CardMedia
                        component="img"
                        src={Images.GallerySurgery}
                        alt="Surgery"
                        onClick={() => handleOpen(Images.GallerySurgery)}
                        sx={{
                            ...imageStyle,
                            aspectRatio: {xs: "3 / 4", md: "9 / 9.5"},
                            objectFit: "cover",
                        }}
                    />
                </Grid>
            </Grid>

            {/* POPUP MODAL */}
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <Box sx={{position: "relative", p: 1}}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            bgcolor: "rgba(0,0,0,0.6)",
                            color: "white",
                            "&:hover": {bgcolor: "rgba(0,0,0,0.8)"},
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>

                    <Box
                        component="img"
                        src={selectedImg}
                        alt="Preview"
                        sx={{
                            width: "100%",
                            maxHeight: "80vh",
                            borderRadius: 2,
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </Dialog>
        </Box>
    );
};

export default GallerySection;
