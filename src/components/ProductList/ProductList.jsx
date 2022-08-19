import * as React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Card from "./Card/Card";
import { Grid } from "@mui/material";

export default function MediaCard() {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} pl={20}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} pl={20}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} pl={20}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} pl={20}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} pl={20}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4} pl={20}>
          <Card />
        </Grid>
      </Grid>
    </AnimationOnScroll>
  );
}
