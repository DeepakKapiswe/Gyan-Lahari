import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { navigate } from '@reach/router';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    card: {
        width: '100%',
        maxWidth: 500,
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        overflow: 'initial',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-around',
        paddingLeft: 3,
        paddingRight: 3,
        background:
            'linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)',
        [breakpoints.up('sm')]: {
            textAlign: 'left',
        },
    },
    cardSmall: {
        lineHeight: 1.5,
        fontWeight: '900',
        opacity: 0.95,
        color: '#220a70',
        fontSize: '1.1rem',

        width: '100%',
        borderRadius: spacing(0.9), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        overflow: 'initial',
        display: 'flex',
        flexDirection: 'column',
        justify: 'center',
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 1,
        paddingBottom: 1,
        // background: 'rgb(248,255,16)',
        background:
            'linear-gradient(146deg, rgba(248,255,16,0.7077205882352942) 1%, rgba(254,255,254,1) 20%, rgba(194,247,143,1) 65%)',
    },
    overline: {
        lineHeight: 1.5,
        color: '#ffffff',
        fontWeight: '700',
        fontSize: '1.1rem',
        opacity: 0.8,
    },
    heading: {
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: 0.5,
        fontSize: '1.5rem',
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 9,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#ffffff',
        textTransform: 'none',
        width: '100%',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.32)',
        },
        [breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
}));
export default function DistributorCard(props) {
    const styles = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const dD = props.distributorDetails;

    return (
        <Container maxWidth="sm">
            <Card className={styles.card}>
                <CardContent className={styles.content}>
                    <Grid item>
                        <Typography variant="h5" component="h2"
                            className={styles.heading} gutterBottom>
                            {dD.distName}
                        </Typography>
                    </Grid>

                    <Grid container
                        spacing={1}
                        direction="row"
                        alignItems="flex-end"
                    >
                        <Grid item xs container>
                            <Grid container
                                component={Typography}
                                spacing={0}
                                direction="column"
                                justify="flex-start"
                                alignItems="baseline"
                            >

                                <Grid item>
                                    <Typography className={styles.overline} gutterBottom variant={'overline'}>
                                        {dD.distAdd}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography className={styles.overline} gutterBottom variant={'overline'}>
                                        {dD.distCity}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Typography className={styles.overline} gutterBottom variant={'overline'}>
                                        {dD.distPhone}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid
                                container
                                spacing={1}
                                direction="column"
                                justify="flex-start"
                                alignItems="strech"
                            >

                                <Grid item
                                    className={styles.cardSmall}>
                                    <Typography variant={'subtitle'} gutterBottom>
                                        Dist Id : {dD.distId}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <Grid container
                        justify="space-around"
                    >
                        <Grid item>
                            <Button size="small" color="primary" className={styles.button}
                            onClick={ e => navigate("/patrika/distributionListForm", {state:{distributor:dD}})}
                            >
                                Distribution List
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" color="primary" className={styles.button}
                            onClick={ e => navigate("/patrika/expiryListForm", {state:{distributor:dD}})}
                            >
                                Expiry List
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" color="primary" className={styles.button}
                            onClick={ e => navigate("/patrika/editDistributor", {state:{distributor:dD}})}
                             >
                               Edit
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" color="primary" className={styles.button}
                                onClick={handleExpandClick}>
                                Show More
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid item>
                            <Typography className={styles.overline} gutterBottom variant={'body1'}>
                                Other Distribution Details to be added Here
                            </Typography>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
};