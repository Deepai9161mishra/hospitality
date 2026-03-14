import {useEffect, useRef, useState} from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    Stack, Divider, Tooltip
} from "@mui/material";
import {testimonials} from "../constants/testimonials";
import VideoPopup from "./VideoPopup.jsx";

export default function TestimonialsSection() {
    const scrollRef = useRef(null);
    const animationRef = useRef(null);
    const isPausedRef = useRef(false);
    const directionRef = useRef(1);
    const [openVideo, setOpenVideo] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleOpenVideo = (url) => {
        setSelectedVideo(url);
        setOpenVideo(true);
    };

    const handleCloseVideo = () => {
        setOpenVideo(false);
        setSelectedVideo(null);
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let last = performance.now();

        const SPEED = 90; // px per second

        const scroll = (now) => {
            const delta = (now - last) / 1000; // seconds since last frame
            last = now;

            if (!isPausedRef.current) {
                scrollContainer.scrollLeft += SPEED * delta * directionRef.current;

                const max = scrollContainer.scrollWidth - scrollContainer.clientWidth;

                // clamp + reverse cleanly
                if (scrollContainer.scrollLeft >= max) {
                    scrollContainer.scrollLeft = max;
                    directionRef.current = -1;
                } else if (scrollContainer.scrollLeft <= 0) {
                    scrollContainer.scrollLeft = 0;
                    directionRef.current = 1;
                }
            }

            animationRef.current = requestAnimationFrame(scroll);
        };

        animationRef.current = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    const pause = () => (isPausedRef.current = true);
    const resume = () => (isPausedRef.current = false);

    return (
        <>
            <Box
                sx={{py: 1, overflow: "hidden"}}
                onMouseEnter={pause}
                onMouseLeave={resume}
                onTouchStart={pause}
                onTouchEnd={resume}
            >
                <Box
                    ref={testimonials.length > 3 ? scrollRef : null}
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "hidden",
                        px: 3,
                        alignItems: "center",
                        height: 420,
                    }}
                >
                    {testimonials.map((t, i) => (
                        <Box key={i} sx={{flexShrink: 0}}>
                            <Card sx={{
                                borderRadius: 5,
                                width: 400,
                                boxShadow: 2,
                                overflow: "hidden",
                                minHeight: 400,
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column",
                                height: "100%",
                                padding: "12px",
                                fontWeight: "normal"
                            }}>
                                {t.video && (
                                    <Box
                                        sx={{position: "relative", width: "100%", height: 210, cursor: "pointer"}}
                                        onClick={() => handleOpenVideo(t.video)}
                                    >
                                        <Box
                                            component="img"
                                            src={`https://img.youtube.com/vi/${t.video.split("v=")[1]}/hqdefault.jpg`}
                                            alt={t.name}
                                            sx={{
                                                width: "100%", height: "100%", objectFit: "cover", borderRadius: 5,
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: "rgba(0,0,0,0.15)",
                                                borderRadius: 7,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: "50%",
                                                    background: "rgba(13, 148, 136, 0.8)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: 28,
                                                    fontWeight: 700,
                                                    color: "white"
                                                }}
                                            >
                                                ▶
                                            </Box>
                                        </Box>
                                    </Box>
                                )}

                                <Box sx={{flexGrow: 1, display: "flex"}}>
                                    <Tooltip
                                        title={t.text}
                                        arrow
                                        enterDelay={400}
                                        enterTouchDelay={0}
                                    >

                                        <Typography
                                            sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: t.video ? 3 : 12,
                                                width: "100%",
                                                lineHeight: 1.6,
                                                mt: t.video ? 1 : 0,
                                            }}
                                        >
                                            {t.text}
                                        </Typography>
                                    </Tooltip>
                                </Box>

                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        padding: 0,
                                        paddingBottom: "0!important"
                                    }}
                                >
                                    <Divider sx={{my: 2}}/> {/* 👈 dividing line */}

                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                        sx={{mt: "auto"}}
                                    >
                                        <Avatar>{t.name[0]}</Avatar>
                                        <Box>
                                            <Typography fontWeight={600}>{t.name}</Typography>
                                            <Typography color="text.secondary" fontSize={14}>
                                                {t.role}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>

                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
            <VideoPopup
                open={openVideo}
                onClose={handleCloseVideo}
                youtubeUrl={selectedVideo}
            />

        </>

    );
}
