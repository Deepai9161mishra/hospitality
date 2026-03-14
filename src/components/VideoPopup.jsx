import {Dialog, DialogContent, IconButton, Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function VideoPopup({open, onClose, youtubeUrl}) {
    const videoId = youtubeUrl?.split("v=")[1];

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent sx={{p: 0, position: "relative"}}>
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 2,
                        background: "rgba(0,0,0,0.4)",
                        color: "white",
                        "&:hover": {background: "rgba(0,0,0,0.6)"}
                    }}
                >
                    <CloseIcon/>
                </IconButton>

                {videoId && (
                    <Box
                        component="iframe"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        sx={{
                            width: "100%",
                            aspectRatio: "16 / 9",
                            border: 0
                        }}
                    />
                )}
            </DialogContent>
        </Dialog>
    );
}
