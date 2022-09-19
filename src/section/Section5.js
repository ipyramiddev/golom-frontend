import { Box, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function Section5() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Box className="section4-box">
                <Box sx={{textAlign:"left"}}>
                    <Typography fontSize="1.875rem" fontWeight="700">Frequently Asked Questions</Typography>
                        <Typography>Have a specific question in mind?</Typography>
                        <Typography>Drop us a mail at <span style={{fontWeight:"700"}}>hello@golom.io</span> and we would get back to you.</Typography>
                </Box>
                <Grid container spacing={3} sx={{mt:"30px"}}>
                    <Grid item xs={6}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor:"#181818", color:"white"}}>
                            <AccordionSummary
                                expandIcon={expanded === 'panel1' ? <RemoveIcon className="expand-icon" /> : <AddIcon className="expand-icon"/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>🤔 What is Golom?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{textAlign:"left"}}>
                            Golom.io is an NFT marketplace made for the NFT traders, by the NFT traders, it's a one stop solution for NFT trading where you can benefit with the lowest trading fee, tonnes of analytical tools and earn rewards while trading. More details <span style={{color:"#ff8982"}}>here</span>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={6}>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{backgroundColor:"#181818", color:"white"}}>
                            <AccordionSummary
                                expandIcon={expanded === 'panel2' ? <RemoveIcon className="expand-icon" /> : <AddIcon className="expand-icon"/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>🧁 What are the rewards and trading fee on Golom?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{textAlign:"left"}}>
                                Golom has a flat 0.5% trading fee and it goes straight to the stakers as rewards. Traders also earn staking rewards when they stake the Golom token $GOLOM from the emissions. More <span style={{color:"#ff8982"}}>here</span>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={6}>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{backgroundColor:"#181818", color:"white"}}>
                            <AccordionSummary
                                expandIcon={expanded === 'panel3' ? <RemoveIcon className="expand-icon" /> : <AddIcon className="expand-icon"/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>🐻 How is Golom different from other pl4tforms?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{textAlign:"left"}}>
                                Golom is a complete community driven platform which is designed to reward the users and not any individual or team or VCs, It's trading smart contracts are efficiently written from scratch which saves upto 40% in gas fee and Golom has a flexible protocol which can be used by other exchanges as well where they could provide the same offerings while earning rewards for themselves and their users. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={6}>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{backgroundColor:"#181818", color:"white"}}>
                            <AccordionSummary
                                expandIcon={expanded === 'panel4' ? <RemoveIcon className="expand-icon" /> : <AddIcon className="expand-icon"/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>🤯 What are the analytical tools available on Golom?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{textAlign:"left"}}>
                                Users can get end to end portfolio analysis at one click,  get access to the liquidity across platforms and fill orders in one click ,get the rarity check, access rich filtering & sorting, , get the trait analysis done, bid collection wide offers and much more all on Golom. More details  <span style={{color:"#ff8982"}}>here</span>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={6}>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{backgroundColor:"#181818", color:"white"}}>
                            <AccordionSummary
                                expandIcon={expanded === 'panel5' ? <RemoveIcon className="expand-icon" /> : <AddIcon className="expand-icon"/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Box sx={{display:"flex"}}>
                                    <Typography> 🤑 </Typography>
                                    <Typography sx={{ textAlign: "left", marginLeft:"5px" }}>Will there be an Airdrop of the token ? Where can I get more information on the tokenomics?</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{textAlign:"left"}}>
                                Yes, there will be an Airdrop of tokens to the users who meet certain conditions. Get the complete details on the token <span style={{color:"#ff8982"}}>here</span>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={6}>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{backgroundColor:"#181818", color:"white"}}>
                            <AccordionSummary
                                expandIcon={expanded === 'panel6' ? <RemoveIcon className="expand-icon" /> : <AddIcon className="expand-icon"/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Box sx={{display:"flex"}}>
                                    <Typography> 😇 </Typography>
                                    <Typography sx={{ textAlign: "left", marginLeft:"5px" }}>What all NFTs can I trade on golom? How can I list my collection on Golom?</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{textAlign:"left"}}>
                                Golom indexes all ERC721 and ERC1155 collections in existence on the Ethereum blockchain, traders can just connect their wallet and start trading. More details <span style={{color:"#ff8982"}}>here</span>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}