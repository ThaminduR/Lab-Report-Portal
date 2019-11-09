import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundImage: 'url(https://mares-med.com/profiles/recruiter/themes/cloudy/images/search-container-img.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedContent: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8),
            paddingRight: 0,
        },
    },
    card: {
        backgroundColor: 'rgb(8,72,109,1)',
        color: 'white',
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(0, 0),
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: "url('https://c7.uihere.com/files/489/607/701/medical-background-vector.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>

            <div className={classes.mainFeaturedPost} style={{ width: '100vw' }}>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Lab Report Portal
                                    </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                Access all your lab reports from one place.
                                    </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <AppBar position="static" style={{ backgroundColor: 'rgb(23,102,151,1)' }} >
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Management" {...a11yProps(0)} style={{ flex: 1 }} />
                    <Tab label="Report Management" {...a11yProps(1)} style={{ flex: 1 }} />
                    <Tab label="User Management" {...a11yProps(2)} style={{ flex: 1 }} />
                    <button style={{
                        fontSize: '1.5vh',
                        width: "5vw",
                        borderRadius: "10px",
                        height: '4vh',
                        marginTop: "0.5rem",
                        marginBottom: '0.5rem'
                    }}
                        className="btn waves-effect waves-light hoverable ">Log Out</button>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="col s12 center-align">
                    <button
                        style={{
                            alignSelf: 'center',
                            width: "300px",
                            borderRadius: "10px",
                            letterSpacing: "1px",
                            marginTop: "5rem",
                            marginBottom: '5rem'
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Add new report
                </button>
                </div>
                <div className="col s12 center-align">
                    <button
                        style={{
                            alignSelf: 'center',
                            width: "300px",
                            borderRadius: "10px",
                            letterSpacing: "1px",
                            marginTop: "1rem",
                            marginBottom: '5rem'
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Update/ Remove a report
                </button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="col s12 center-align">
                    <button
                        style={{
                            alignSelf: 'center',
                            width: "300px",
                            borderRadius: "10px",
                            letterSpacing: "1px",
                            marginTop: "5rem",
                            marginBottom: '5rem'
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Register a new user
                </button>
                </div>
                <div className="col s12 center-align">
                    <button
                        style={{
                            alignSelf: 'center',
                            width: "300px",
                            borderRadius: "10px",
                            letterSpacing: "1px",
                            marginTop: "1rem"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Remove an existing user
                </button>
                </div>
            </TabPanel>
        </div>
    );
}