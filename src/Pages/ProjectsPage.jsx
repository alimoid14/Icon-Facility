import { Helmet } from 'react-helmet'
import CarouselCont from '../assets/CarouselCont'
import Project from '../assets/HomeSpecifiedComp/Project'
import NavDown from '../assets/NavDown'
import office_cleaning from '../assets/pics/office_cleaning.jpg'

function ProjectsPage() {
  return (
    <>
    <Helmet>
      <title>Projects | ICON-Facility</title>
      <meta name='description' content='Latest Projects' />
    </Helmet>
    <NavDown homeact="" aboutact="" contactact="" serviceact="" projectact="active-link" teamAct="" />
    <CarouselCont displaybut="none" imgsrc={office_cleaning} smalltxt="Selection of our work" bigtxt1='Latest Projects' bigtxt2='' />
    <Project />
    </>
  )
}

export default ProjectsPage