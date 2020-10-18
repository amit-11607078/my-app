import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import screenshot from "./Screenshot.png";
import BloodSugarFasting from "./BloodSugarFasting";
import GlucoseRandom from "./GlucoseRandom";
import GlucoseInUrine from "./GlucoseInUrine";
import AveragePlasmaGlucose from "./AveragePlasmaGlucose";
import GlycosylatedHaemoglobin from "./GlycosylatedHaemoglobin";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: 50,
    maxWidth: 900,
    maxHeight: "auto",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid(props) {
  const data = props.data;
  const name = data[0].PName;
  const gender = data[0].Gender;
  const age = data[0].Age;
  const date = data[0].DoctorApprovedDateTime;
  var d = new Date(date);
  const newDate = d.toLocaleDateString();

  var bloodGlucoseFasting = data.filter((data) => {
    return data.TestName === "Blood Sugar Fasting";
  });

  var glucoseRandom = data.filter((data) => {
    return data.TestName === "GLUCOSE- RANDOM";
  });

  var glucoseInUrine = data.filter((data) => {
    return data.TestName === "GLUCOSE IN URINE";
  });

  var glycosylatedHaemoglobin = data.filter((data) => {
    return data.TestName === "HbA1C (Glycosylated haemoglobin)";
  });

  var averagePlasmaGlucose = data.filter((data) => {
    return data.TestName === "Estimated Average Plasma Glucose";
  });
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h4" color="primary">
            Daibetes Story
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs={5}>
                <Typography gutterBottom variant="body2">
                  Patient Name
                </Typography>
                <Typography variant="subtitle1" color="secondary" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {gender}, {age}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography gutterBottom variant="body2">
                  Date
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {newDate}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data[0].DoctorName}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="" src={screenshot} />
              </ButtonBase>
            </Grid>
          </Grid>

          <div className="sdiv">
            {bloodGlucoseFasting ? (
              <BloodSugarFasting data={bloodGlucoseFasting} />
            ) : null}

            {glucoseRandom ? <GlucoseRandom data={glucoseRandom} /> : null}

            {glycosylatedHaemoglobin ? (
              <GlycosylatedHaemoglobin data={glycosylatedHaemoglobin} />
            ) : null}

            {averagePlasmaGlucose ? (
              <AveragePlasmaGlucose data={averagePlasmaGlucose} />
            ) : null}

            {glucoseInUrine ? <GlucoseInUrine data={glucoseInUrine} /> : null}
          </div>
        </Paper>
      </div>
    </>
  );
}
