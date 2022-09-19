import { Box, Typography, Card, Grid, CardContent } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dollar from "../assets/card1_dollar.svg";
import face from "../assets/card1_face.svg";
import diamond from "../assets/card1_diamond.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card5 from "../assets/card5.svg";
import card6 from "../assets/card6.svg";
import body from "../assets/body.svg";
import graph from "../assets/graph.svg";
import colorBody from "../assets/colorBody.svg";
export default function Section4() {
    return (
        <>
            <Box className="section4-box">
                <Grid container spacing={2}>
                    <Grid item xs={4} >
                        <Box>
                            <Card sx={{backgroundColor:"#181818", borderRadius:"15px"}}>
                                <CardContent>
                                    <Box className="card1">
                                        <img className="padding" src={dollar} width="10%" alt="dollar" />
                                        <Typography className="padding" fontWeight="700">Lowest gas + Trading fees (0.5%)</Typography>
                                        <Typography className="padding">Find & flip NFTs while paying the lowest gas and a flat 0.5% trading fee.</Typography>
                                    </Box>
                                    <Box className="card1">
                                        <img className="padding" src={face} width="10%" alt="face" />
                                        <Typography className="padding" fontWeight="700">EIP-712 signing</Typography>
                                        <Typography className="padding">Know what you're really signing.</Typography>
                                    </Box>
                                    <Box className="card1">
                                        <img className="padding" src={diamond} width="10%" alt="diamond" />
                                        <Typography className="padding" fontWeight="700">Multisource Liquidity</Typography>
                                        <Typography className="padding">Liquidity from multiple sources in one place</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{mt:"20px"}}>
                            <Card sx={{backgroundColor:"#3c342c", borderRadius:"15px"}}>
                                <CardContent>
                                    <Box className="card1">
                                        <Typography className="padding" fontWeight="700">Portfolio Tracker</Typography>
                                        <Typography className="padding">Keep track of the items in your portfolio and estimate the value of your current holdings and realized gains.</Typography>
                                        <Box sx={{display:"flex"}}>
                                            <Typography className="padding">Learn more</Typography>
                                            <Box className="more">
                                                <ArrowForwardIcon />
                                            </Box>
                                        </Box>
                                        <img src={card2} width="100%" alt="card2" />                                        
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={4} >
                        <Box>
                            <Card sx={{backgroundColor:"#181818", borderRadius:"15px"}}>
                                <CardContent>
                                    <Box className="card1">
                                        <Typography className="padding" fontWeight="700">Powerful filters</Typography>
                                        <Typography className="padding">Use our wide array of filters to comb through the NFT library with as much granularity as you want.</Typography>
                                        <Box sx={{display:"flex"}}>
                                            <Typography className="padding">Learn more</Typography>
                                            <Box className="more">
                                                <ArrowForwardIcon />
                                            </Box>
                                        </Box>
                                        <img src={card3} width="100%" alt="card3" />                                        
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{mt:"20px"}}>
                            <Card sx={{backgroundColor:"#181818", borderRadius:"15px"}}>
                                <CardContent>
                                    <Box className="card1">
                                        <Typography className="padding" fontWeight="700" sx={{mb:"30px"}}>In Depth analytics</Typography>
                                        <Typography className="padding" sx={{mb:"20px"}}>Check who is HODL-ing the most</Typography>
                                        <Box sx={{backgroundColor:"#242424", borderRadius:"5px", mb:"10px"}}>
                                            <Grid container sx={{padding:"10px"}}>
                                                <Grid item xs={1}>🥇</Grid>
                                                <Grid item xs={10}>
                                                    <Box sx={{ display: "flex" }}>
                                                        <Box className="address" sx={{backgroundColor:'#ffd0ef', display:"flex"}}>
                                                            <img src={body} alt="body" className="mrg" />
                                                            <Typography fontWeight="500" color="white" sx={{ml:"5px"}}>GandalfTheGreat</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Box className="amount">
                                                        <Typography fontWeight="700" fontSize="0.75rem" color="white" sx={{padding:"3px"}}>109</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{borderRadius:"5px", mb:"10px"}}>
                                            <Grid container sx={{padding:"10px"}}>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={10}>
                                                    <Box sx={{ display: "flex" }}>
                                                        <Box className="address" sx={{backgroundColor:'#ffc793', display:"flex"}}>
                                                            <img src={colorBody} alt="colorBody" className="mrg" />
                                                            <Typography fontWeight="500" color="white" sx={{ml:"5px"}}>0xeb3a...b227</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Box className="amount">
                                                        <Typography fontWeight="700" fontSize="0.75rem" color="white" sx={{padding:"3px"}}>34</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{borderRadius:"5px", mb:"30px"}}>
                                            <Grid container sx={{padding:"10px"}}>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={10}>
                                                    <Box sx={{ display: "flex" }}>
                                                        <Box className="address" sx={{backgroundColor:'#aeff93', display:"flex"}}>
                                                            <img src={body} alt="body" className="mrg" />
                                                            <Typography fontWeight="700" color="white" sx={{ml:"5px"}}>0xbc4c...f13d</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Box className="amount">
                                                        <Typography fontWeight="700" fontSize="0.75rem" color="white" sx={{padding:"3px"}}>50</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Typography className="padding" sx={{mb:"25px"}}>Get in-depth analytics about a collection - volume, price and sales chart, floor distribution, top minters and holder activity.</Typography>
                                        <img src={graph} width="100%" alt="graph" />                                        
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={4} >
                        <Box>
                            <Card sx={{backgroundColor:"#3c342c", borderRadius:"15px"}}>
                                <CardContent>
                                    <Box className="card1">
                                        <Typography className="padding" fontWeight="700" sx={{mb:"20px"}}>Trait Analysis</Typography>
                                        <Typography className="padding">Get even more granular data about a trait in a collection viz. floor price, number of sales, rarity, volume & percent listed.</Typography>
                                        <Box sx={{display:"flex", mt:"10px"}}>
                                            <Typography className="padding" sx={{mb:"20px"}}>Learn more</Typography>
                                            <Box className="more">
                                                <ArrowForwardIcon />
                                            </Box>
                                        </Box>
                                        <img src={card5} width="100%" alt="card5" />                                        
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{mt:"20px"}}>
                            <Card sx={{backgroundColor:"#181818", borderRadius:"15px"}}>
                                <CardContent>
                                    <Box className="card1">
                                        <Typography className="padding" fontWeight="700" sx={{mb:"30px"}}>List anywhere</Typography>
                                        <Typography className="padding" sx={{mb:"30px"}}>Golom allows you to list NFTs on the platform of your choice.</Typography>
                                        
                                        <img src={card6} width="100%" alt="card6" />                                        
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}