import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './HomeOptCard.module.css'

function HomeOptCard({icon,title,caption,btnText}) {
  return (
    <>
<div className={`card bg-base-100 shadow-sm ${styles.homeCard} w-11/12 sm:w-80 `}>
  <div className="card-body flex flex-col items-center ">
    <h2 className="card-title bg-[#115599] text-white p-3 overflow-hidden">
      <FontAwesomeIcon icon={icon} />
    </h2>
    <h4 className="text-lg sm:text-xl overflow-hidden">{title}</h4>
    <p className="whitespace-normal break-words text-center px-4 text-sm sm:text-base">
      {caption}
    </p>
    <div className="card-actions justify-end">
      <a href="" className="no-underline">{btnText}</a>
    </div>
  </div>
</div>

    
    </>
  )
}

export default HomeOptCard