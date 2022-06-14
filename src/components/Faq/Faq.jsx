
import './Faq.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem', color: 'white' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? 'black'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',


    },

    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='Faqmaindiv' id='Faq' >

            {/* <h1 className='mAINHEADING' style={{color:'#000'}} >FAQ</h1> */}

            <h1 className='mAINHEADING' >FAQ</h1>
            <div className="mainheadingtext">Frequently Asked Questions</div>

            <div className="innerdiv">

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">WHAT is CST car Club?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody" >
                        <Typography className="bodytext" >
                            CST car Club is the early blockchain-based gaming platform with NFT assets. The game includes BSC marketplace for in-game NFT trading, and a whole spectrum of crypto-features for enabling Play-to-Earn mechanics.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography className="AccodionHeadertext">WHAT'S CST car Club GAMEPLAY LIKE?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            CST car club is virtual gaming platform with its own community based on Play2Earn 3D car racing game, designed with many modes and advanced meta. The in-game story will immerse the player in a fictional, mysterious world full of strange creatures and challenges that must be completed to receive a reward.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography className="AccodionHeadertext">HOW TO MAKE MONEY WHILE using CST Car Club?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            CST car Club includes a whole spectrum of crypto-features enabling Play-to-Earn mechanics, including NFT leasing and token staking and farming.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography className="AccodionHeadertext">WHO IS THE TEAM BEHIND THE PROJECT?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">

                            Backed by life-long gamers and early crypto-gaming adopters, CST car Club’s  leadership team are visionaries forging the future of the gaming industry. With careers spanning blockchain, DeFi, banking and more, as well as a wealth of knowledge, they created CST car Club to include a cutting-edge P2E instrument and high-quality graphics and enjoyable gameplay.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography className="AccodionHeadertext">ARE THERE ANY PERKS FOR COMMUNITY?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            Of course! We are continuously giving our community exclusive opportunities and perks. So, you don’t miss out on the opportunities, please join our telegram channel, and become a part of the beloved CST car Club community.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography className="AccodionHeadertext">WHAT IS THE NAME OF THE CST car Club TOKEN?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">

                            The Utility token for CST gaming platform is CST token.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}
