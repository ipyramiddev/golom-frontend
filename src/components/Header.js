import * as React from 'react';
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import icon2 from "../assets/icon2.svg";
import SearchIcon from '@mui/icons-material/Search';
import metamask from "../assets/metamask.png";

import './style.css';

export default function Header() {
    return (
        <Box className="header">
            <Box className="logo">
                <img src={logo} alt="logo" style={{marginRight:"2%"}} />
                <Box className="search">
                    <SearchIcon sx={{color:"white"}} />
                    <input className="searchInput" placeholder="Search collections and accounts" />
                </Box>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between", marginLeft:"5%"}}>
                <Box className="menu">
                    <img src={logo} width="30px" />
                    <Typography>Listings</Typography>
                </Box>
                <Box className="menu">
                    <img src={icon2} width="30px" />
                    <Typography>Collections</Typography>
                </Box>
                <Box className="menu">
                    <Box className="button">
                        <img src={metamask} width="30px"/>
                        Connect Wallet
                    </Box>    
                </Box>
            </Box>
        </Box>
    );
}