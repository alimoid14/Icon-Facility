import { Helmet } from 'react-helmet'
import CarouselCont from '../assets/CarouselCont'
import ContactForm from '../assets/ContactComp/ContactForm'
import NavDown from '../assets/NavDown'
import industrialcleaning from "../assets/pics/industrialcleaning.jpg"

function ContactPage() {
  return (
    <>
    <Helmet>
      <title>Contact Us | ICON-Facility</title>
      <meta name='description' content='Contact us' />
    </Helmet>
    <NavDown homeact="" aboutact="" contactact="active-link" serviceact="" projectact="" teamAct="" />
    <CarouselCont displaybut="none" imgsrc={industrialcleaning} smalltxt="Contact us" bigtxt1="Send us an email" bigtxt2='Or Call us.' />
    <ContactForm />
    </>
  )
}

export default ContactPage