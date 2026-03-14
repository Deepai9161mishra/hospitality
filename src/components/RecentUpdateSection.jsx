import {useMemo, useState} from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack,
    Tooltip,
} from "@mui/material";
import {recentUpdates} from "../constants/recentUpdate.js";

export default function RecentUpdateSection() {
    // sort once
    const sorted = useMemo(() => {
        return [...recentUpdates].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, []);

    // left featured item
    const [featured, setFeatured] = useState(sorted[0]);

    // right list should always be remaining items
    const others = useMemo(() => {
        return sorted.filter((x) => x.id !== featured.id);
    }, [sorted, featured]);

    return (
        <Box
            sx={{
                paddingTop: "30px",
                display: "grid",
                gap: 3,
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "0.8fr 1fr",
                },
                height: {
                    xs: "auto",
                    md: 420,
                },
            }}
        >
            {/* LEFT FEATURED */}
            <Card
                sx={{
                    borderRadius: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="img"
                    image={featured.img}
                    alt={featured.title}
                    sx={{
                        height: 220,
                        objectFit: "cover",
                    }}
                />

                <CardContent sx={{overflow: "hidden"}}>
                    <Typography variant="h6" fontWeight={700} mb={1}>
                        {featured.title}
                    </Typography>

                    <Tooltip
                        title={featured.description}
                        arrow
                        enterDelay={400}
                        enterTouchDelay={0}
                    >
                        <Typography
                            color="text.secondary"
                            mb={1.5}
                            sx={{
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {featured.description}
                        </Typography>
                    </Tooltip>

                    <Typography fontSize={14}>
                        {new Date(featured.date).toDateString()}
                    </Typography>
                </CardContent>
            </Card>

            {/* RIGHT LIST */}
            <Box
                sx={{
                    height: "100%",
                    overflowY: "auto",
                    pr: 0.5,
                }}
            >
                <Stack spacing={2}>
                    {others.map((ev) => (
                        <Card
                            key={ev.id}
                            onClick={() => setFeatured(ev)}
                            sx={{
                                cursor: "pointer",
                                display: "flex",
                                borderRadius: 3,
                                flexDirection: {xs: "column", sm: "row"},
                                height: {md: 119},
                                transition: "0.2s",
                                "&:hover": {
                                    transform: "translateY(-2px)",
                                    boxShadow: 4,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={ev.img}
                                alt={ev.title}
                                sx={{
                                    width: {xs: "100%", sm: 130},
                                    height: {xs: 150, sm: "auto"},
                                    objectFit: "cover",
                                }}
                            />

                            <CardContent sx={{flex: 1}}>
                                <Typography fontWeight={700} mb={0.5}>
                                    {ev.title}
                                </Typography>

                                <Tooltip
                                    title={ev.description}
                                    arrow
                                    enterDelay={400}
                                    enterTouchDelay={0}
                                >
                                    <Typography
                                        color="text.secondary"
                                        fontSize={14}
                                        mb={1}
                                        sx={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {ev.description}
                                    </Typography>
                                </Tooltip>

                                <Typography fontSize={13}>
                                    {new Date(ev.date).toDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}
