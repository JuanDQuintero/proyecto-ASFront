import React, { Fragment } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";
import { Schedule, EventAvailable, ScheduleSend, EventAvailableOutlined } from "@mui/icons-material";

const Calendar = () => {
  return (
    <Fragment>
        <Typography variant="h2" gutterBottom component="div" align="center">
        Calendario Academico 2022
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "start",
              marginTop: "10px"
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Fecha publicacion
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <Schedule />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              variant="outlined"
              elevation={3}
              sx={{ padding: "10px", bgcolor: "transparent" }}
            >
              <Paper sx={{ padding: "6px 16px", border: "" }}>
                <Typography variant="h6" component="h1">
                  Fecha Matricula
                </Typography>
                <Typography>
                  20 de Enero del 2022
                </Typography>
              </Paper>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "start",
              marginTop: "10px"
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Solicitud de Matriculas
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <EventAvailable />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              variant="outlined"
              elevation={3}
              sx={{ padding: "10px", bgcolor: "transparent" }}
            >
              <Paper elevation={3} sx={{ padding: "6px 16px" }}>
                <Typography variant="h6" component="h1">
                  Fecha de solicitud
                </Typography>
                <Typography>
                  28 de Enero del 2022
                </Typography>
              </Paper>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "start",
                marginTop: "10px"
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Entrega de Documentación
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <EventAvailableOutlined />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              variant="outlined"
              elevation={3}
              sx={{ padding: "10px", bgcolor: "transparent" }}
            >
              <Paper elevation={3} sx={{ padding: "6px 16px" }}>
                <Typography variant="h6" component="h1">
                  Fecha de entrega
                </Typography>
                <Typography>
                  Entrega documentos 28 de enero al 5 de febrero
                </Typography>
              </Paper>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "start",
                marginTop: "10px"
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Prematricula
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ScheduleSend />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              variant="outlined"
              elevation={3}
              sx={{ padding: "10px", bgcolor: "transparent" }}
            >
              <Paper elevation={3} sx={{ padding: "6px 16px" }}>
                <Typography variant="h6" component="h1">
                  Fecha Prematricula
                </Typography>
                <Typography>
                  Prematrícula 7 de febrero
                </Typography>
              </Paper>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Fragment>
  );
};

export default Calendar;
