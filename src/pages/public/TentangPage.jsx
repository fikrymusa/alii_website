import React from 'react'
import ImageSlider from '../../components/web/ImageSlider'
import Profile from '../../components/web/tentang/Profile'
import Principles from '../../components/web/tentang/Principles'
import RoadMap from '../../components/web/tentang/RoadMap'
import Inovasi from '../../components/web/Inovasi'
import JoinUs from '../../components/web/program/JoinUs'
import MitraKerjasama from '../../components/web/MitraKerjasama'


const TentangPage = () => {
  return (
       <div className='flex flex-col'>
        {/* <ImageSlider /> */}
        <Profile />
        <Principles />
        <RoadMap />
        <Inovasi />
        <MitraKerjasama />
        <JoinUs />
    </div>
  )
}

export default TentangPage