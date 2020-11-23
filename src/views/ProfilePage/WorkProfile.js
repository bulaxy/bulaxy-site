import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import { infinitee, serenity, rollingfun, msnh, campion, micem, cbs } from '../../constants/images'
import ExpendableTimelineNode from '../../components/Timeline/ExpendableTimelineNode';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  containerRoot: {
    maxHeight: '600px'
  },
}));
export default function WorkProfile() {
  const classes = useStyles();
  return (
    <Container className={classes.containerRoot} maxWidth={false} disableGutters>
      <Timeline align="alternate">
        <ExpendableTimelineNode
          title="IT Business Support"
          subtitle="Serenity Life Balance"
          content={{
            title: 'Key Duties/Tasks',
            items: [
              "Provide IT advice and consultation for Serenity Life Balance",
              "Provide Individual IT support for external customers",
              "Organisze computer lessons for customers"
            ]
          }}
          img={serenity}
          date="Oct 2019 - Present"
        />
        <ExpendableTimelineNode
          title="Software and Applications Developer"
          subtitle="Infinitee Software"
          content={{
            title: 'Key Duties/Tasks',
            items: [
              "Design and develop Mobile Applications for both phone and tablet apps using React-Native",
              "Conducting research into new SDKs, Modules and library for in-house platform",
              "Design and develop server side code on NodeJs and SQL database"
            ]
          }}
          img={infinitee}
          date="Oct 2019 - Nov 2020"
        />
        <ExpendableTimelineNode
          title="Web Developer (Contractor)"
          subtitle="TindoLand"
          content={{
            title: 'Key Duties/Tasks',
            items: [
              "Develop and enchant RicePaperRoll website"
            ]
          }}
          img={rollingfun}
          date="Sep 2019 - July 2020"
        />
        <ExpendableTimelineNode
          title="IT Tutor for Senior (Volunteer)"
          subtitle="Mount Street Neighborhood House"
          content={{
            title: 'Key Duties/Tasks',
            items: [
              "Prepare material for Senior IT Lessons",
              "Provide face-to-face basic IT tutorial/teaching sessions to seniors"
            ]
          }}
          img={msnh}
          date="Nov 2020"
        />
        <ExpendableTimelineNode
          title="Pick and Packer"
          subtitle="Campion Eduication"
          img={campion}
          date="Dec 2013 - Jan 2014"
        />
        <ExpendableTimelineNode
          title="Waiter"
          subtitle="China Bar Signature (Burwood)"
          img={cbs}
          date="Dec 2012 - Jan 2013"
        />
        <ExpendableTimelineNode
          title="Office Helper (Work Experience Program)"
          subtitle="Migrant Information Center (Eastern Melbourne)"
          img={micem}
          date="June 2012"
        />
      </Timeline >
    </Container>
  );
}