import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Button, ImageListItem, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routesGen } from "../../routes/routes";

const RelatedItem = ({ post }) => {

    const [title, setTitle] = useState("");
    const [posterPath, setPosterPath] = useState("");
    const [releaseDate, setReleaseDate] = useState(null);
    const [rate, setRate] = useState(null);

    //   useEffect(() => {
    //     setTitle(media.title || media.name || media.mediaTitle);

    //     setPosterPath(tmdbConfigs.posterPath(media.poster_path || media.backdrop_path || media.mediaPoster || media.profile_path));

    //     if (mediaType === tmdbConfigs.mediaType.movie) {
    //       setReleaseDate(media.release_date && media.release_date.split("-")[0]);
    //     } else {
    //       setReleaseDate(media.first_air_date && media.first_air_date.split("-")[0]);
    //     }

    //     setRate(media.vote_average || media.mediaRate);
    //   }, [media, mediaType]);

    return (
        <Link to={routesGen.detailPost(post.id)}>
            
                <ImageListItem >
                    <img style={{objectFit:'cover',height:'125px'}} src={post.content[0].image} />
                </ImageListItem>
                <Typography variant="h3" sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "24px",
                    color: "#000000",
                }}>{post.title}</Typography>
                <Typography variant="h4" sx={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#000000",
                }}>{post.time}</Typography>
                <Typography variant="h3" sx={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#000000",
                }}>{post.description}</Typography>
                <Typography variant="h4" sx={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#000000",
                }}>By {post.author.displayName}</Typography>
        </Link>
    );
};

export default RelatedItem;