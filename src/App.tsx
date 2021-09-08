import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  margin:{
    paddingBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    justifyContent: 'center',
  },
  boxButton: {
    justifyContent: 'center',
    display: 'flex',
    margin: theme.spacing(2),
  },
  energyCounterLabel: {
    marginTop: -5,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  color: {
    color: 'white',
    fontWeight: 'bold',
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [energyCast, setEnergyCast] = useState<number>(0);
  const [energyGain, setEnergyGain] = useState<number>(0);
  const [remainingEnergy, setRemainingEnery] = useState<number>(3); // default 3
  const [round, setRound] = useState<number>(1); // default 3

  const addEnergyCast = (): void => {
    setEnergyCast(energyCast + 1);
    setRemainingEnery(remainingEnergy - 1);
  }

  const minusEnergyCast = (): void => {
    setEnergyCast(energyCast - 1);
    setRemainingEnery(remainingEnergy + 1);
  }

  const addEnergyGain = (): void => {
    setEnergyGain(energyGain + 1);
    setRemainingEnery(remainingEnergy + 1);
  }

  const minusEnergyGain = (): void => {
    setEnergyGain(energyGain - 1);
    setRemainingEnery(remainingEnergy - 1);
  }

  const handleNextRound = (): void => {
    setRound(round + 1);
    setEnergyCast(0);
    setEnergyGain(0);
    setRemainingEnery(remainingEnergy + 2);
  }


  const resetGame = (): void => {
    setRound(1);
    setEnergyCast(0);
    setEnergyGain(0);
    setRemainingEnery(3);
  }


  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box textAlign='center' paddingTop={5}>
          <Box>
            <Typography variant="h2" className={classes.color}>Axie Energy Calculator</Typography>
          </Box>
          <Grid container spacing={3} className={classes.grid}>            
            <Grid item xs={12}>
              <Box paddingTop={5}>
                <Typography className={classes.color} variant="h4">
                  Round {round}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" className={classes.color} component="span">
                  Remaining Energy: 
                </Typography>
                {" "}
                <Typography variant="h4" component="span" style={{color: 'red', fontWeight: 'bold'}}>
                  {remainingEnergy}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography variant="h4">
                  Energy Cast
                </Typography>
                <Box className={classes.boxButton}>
                  <Box>
                    <Button 
                      onClick={addEnergyCast} 
                      variant="contained" 
                      size="large" 
                      color="primary" 
                      disabled={remainingEnergy === 0 ? true : false}
                    >
                      <Typography variant="h4">
                        +
                      </Typography>
                    </Button>
                  </Box>
                  <Box className={classes.energyCounterLabel}>
                    <Typography variant="h2">
                      {energyCast}
                    </Typography>
                  </Box>
                  <Box>
                    <Button 
                      onClick={minusEnergyCast} 
                      variant="contained" 
                      size="large" 
                      color="secondary" 
                      disabled={energyCast === 0 ? true : false}
                    >
                      <Typography variant="h4">
                        -
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography variant="h4">
                  Energy Gain
                </Typography>
                <Box className={classes.boxButton}>
                  <Box>
                    <Button 
                      onClick={addEnergyGain} 
                      variant="contained" 
                      size="large" 
                      color="primary"
                    >
                      <Typography variant="h4">
                        +
                      </Typography>
                    </Button>
                  </Box>
                  <Box className={classes.energyCounterLabel}>
                    <Typography variant="h2">
                      {energyGain}
                    </Typography>
                  </Box>
                  <Box>
                    <Button 
                      onClick={minusEnergyGain} 
                      variant="contained" 
                      size="large" 
                      color="secondary" 
                      disabled={energyGain === 0 ? true : false }
                    >
                      <Typography variant="h4">
                        -
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Box>
                <Box
                  className={classes.margin}
                >
                  <Button 
                    onClick={handleNextRound}
                    variant="contained" 
                    color="primary"
                    style={{
                      backgroundColor: 'orange',
                      color: 'white',
                      height: '50px',
                      width: '66%'
                    }}
                  >
                    Next Round
                  </Button>
                </Box>
                <Box
                  className={classes.margin}
                >
                  <Button 
                    onClick={resetGame}
                    variant="contained" 
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      height: '50px',
                      width: '66%'
                    }}
                  >
                    New Game
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
