import {useState, useEffect} from "react";
import {Box, Card, Typography, Stack, Fade} from "@mui/material";
import {coreValuesData} from "../constants/constant.js";
import {Images} from "../constants/images.js";

export default function CoreValues() {
    const [openIndex, setOpenIndex] = useState(0);
    const [isHoverDevice, setIsHoverDevice] = useState(false);

    useEffect(() => {
        setIsHoverDevice(window.matchMedia("(hover: hover)").matches);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                gap: 3,
                py: 4,
                flexDirection: {
                    xs: "column",
                    sm: "row",
                },
            }}
        >
            {coreValuesData.map((v, i) => {
                const isOpen = i === openIndex;

                return (
                    <Card
                        key={i}
                        onMouseEnter={() => {
                            if (isHoverDevice) setOpenIndex(i);
                        }}
                        onClick={() => {
                            if (!isHoverDevice) setOpenIndex(i);
                        }}
                        sx={{
                            cursor: "pointer",
                            borderRadius: 8,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            transition: "all .4s ease",
                            boxShadow: 0.5,

                            flex: {
                                xs: "1 1 100%",
                                sm: isOpen ? "0 1 50%" : "1 1 0%",
                            },

                            height: {
                                xs: "auto",
                                sm: 280,
                            },

                            minHeight: {md: 220, xs: "auto"},
                        }}
                    >
                        {/* icon / image */}
                        <Box
                            sx={{
                                width: 55,
                                height: 55,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                                overflow: "hidden",
                                background: "#E73356",
                                flexShrink: 0, // prevent shrinking
                            }}
                        >
                            <Box
                                component="img"
                                src={v.image}
                                alt={v.title}
                                sx={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "contain",
                                    color: "white",
                                }}
                            />
                        </Box>

                        {/* title */}
                        <Typography variant="h6" sx={{mb: isOpen ? 0.5 : 0}}>
                            {v.title}
                        </Typography>

                        <Box sx={{mt: 0.5, flexGrow: 1, overflow: "hidden"}}>
                            <Box
                                sx={{
                                    height: isOpen ? "100%" : 0,
                                    opacity: isOpen ? 1 : 0,
                                    transition: "all .22s ease",
                                    overflowY: isOpen ? "auto" : "hidden",

                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                    "&::-webkit-scrollbar": {
                                        display: "none",
                                    },
                                }}
                            >
                                <Fade in={isOpen} timeout={260} style={{transitionDelay: isOpen ? "300ms" : "0ms"}}>
                                    <Typography
                                        sx={{
                                            fontSize: 16,
                                            color: "text.secondary",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {v.description}
                                    </Typography>
                                </Fade>
                            </Box>
                        </Box>

                        {/*/!* arrow when closed *!/*/}
                        {/*{!isOpen && (*/}
                        {/*    <Stack sx={{mt: "auto"}}>*/}
                        {/*        <img*/}
                        {/*            src={Images.ArrowIconBlackDiagonal}*/}
                        {/*            alt="icon"*/}
                        {/*            style={{width: "30px", height: "30px"}}*/}
                        {/*        />*/}
                        {/*    </Stack>*/}
                        {/*)}*/}
                    </Card>
                );
            })}
        </Box>
    );
}
