import { Helmet } from 'react-helmet'
import CarouselCont from '../assets/CarouselCont'
import HomeService from '../assets/HomeSpecifiedComp/HomeService'
import NavDown from '../assets/NavDown'
import high_access_cleaning from '../assets/pics/high_access_cleaning.jpg'

function ServicePage() {
  return (
    <>
    <Helmet>
      <title>Services | ICON-Facility</title>
      <meta name='description' content='Our Services' />
    </Helmet>
    <NavDown homeact="" aboutact="" contactact="" serviceact="active-link" projectact="" teamAct="" />
    <CarouselCont  displaybut="none" imgsrc={high_access_cleaning} smalltxt="Professional Cleaning " bigtxt1='Our Services' bigtxt2='' />
    <HomeService />
    </>
  )
}

export default ServicePage