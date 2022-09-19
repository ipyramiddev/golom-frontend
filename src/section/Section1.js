import { Container, Box, Typography, Grid, Card, CardContent } from "@mui/material";

import discord from "../assets/discord.svg"; 
import twitter from "../assets/twitter.svg"; 
import icon2 from "../assets/icon2.svg";
import fire from "../assets/fire.svg";
import opensea from "../assets/opensea.png";
import {ReactComponent as Ethereum1 } from '../assets/ethereum1.svg';
import { ReactComponent as Ethereum2 } from '../assets/ethereum2.svg';
import monkey  from "../assets/monkey.png";


export default function Section1() {
    return (
        <>
            {/* <Box sx={{ display: "flex", justifyContent: "space-between", margin: "10%", mt: "90px" }}> */}
            <Box className="section1-box">
                <Box sx={{ textAlign: "left", width: "50%"}}>
                    <Typography fontSize="3.75rem" fontWeight="700">
                        <span style={{color:"#ff8982"}}>NFT</span> marketplace for
                        ultimate <span style={{color:"#ff8982"}}>Pro</span> traders
                    </Typography>
                    <Typography>
                        0.5% Fee · On-chain Orderbook · 100% Fee Sharing · Flexible royalties (0-10%)
                    </Typography>
                    <Box className="social" sx={{mt:"20px"}}>
                        <a className="button-collection" style={{ marginRight: "20px", padding: "15px 60px", display: "flex", alignItems: "center" }}><img src={icon2} width="25px" style={{paddingRight:"10px"}} />All Collections </a>
                        <img src={twitter} style={{marginRight:"20px"}} width="30px"/>
                        <img src={discord} width="30px"/>
                    </Box>
                    <Box sx={{width:"60%", marginTop:"30px"}}>
                        <Card sx={{backgroundColor:"#181818", borderRadius:"15px", padding:"5%"}}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box sx={{color:"white"}}>
                                        <Typography fontWeight={"700"}>Total Volume</Typography>
                                        <Box sx={{display:"flex", alignItems:"center"}}>
                                            <Ethereum1 />
                                            <Typography color={"#ffd3aa"} fontWeight={"700"}>35924.76</Typography>
                                        </Box>
                                        <Typography sx={{borderRadius:"10px", padding:"10px", backgroundColor:"#242424", fontSize:"15px"}}>≈ $51,191,706.71</Typography>
                                    </Box>
                                    <Box sx={{backgroundColor:"white", width:"1px"}}></Box>
                                    <Box sx={{color:"white"}}>
                                        <Typography fontWeight={"700"}>Total Fee</Typography>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Ethereum2 />
                                            <Typography color={"#ff8982"} fontWeight={"700"}>179.62</Typography>
                                        </Box>
                                        <Typography sx={{borderRadius:"10px", padding:"10px", backgroundColor:"#242424", fontSize:"15px"}}>≈ $255,958.53</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
                <Box sx={{width:"300px", backgroundColor:"#242424", borderRadius:"20px", margin:"30px"}}>
                    <Box className="box-trending" sx={{display:"flex", padding:"10px", borderRadius:"20px"}}>
                        <img src={fire} width="30px" />
                        <Typography sx={{ml:"10px"}}>Trending</Typography>
                    </Box>
                    <Box sx={{ height: "300px", borderRadius: "10px" }}>
                        <img src={ monkey } width="100%"/>
                    </Box>
                    <Box className="box-trending" sx={{textAlign:"left", padding:"10px"}}>
                        <Typography>y00ts DickButts ... #736</Typography>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            {/* <Box className="green-circle" width="20px" height="20px"></Box> */}
                            <img src={opensea} style={{borderRadius:"50%"}} width="20px"/>
                            <Typography sx={{ml:"10px"}}>SculptNFT</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}