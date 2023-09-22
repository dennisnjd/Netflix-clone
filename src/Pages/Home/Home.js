import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import RowPost from '../../components/RowPost/RowPost'

import { originals, actions, comedy, horror, documentry, tvShows } from '../../urls'


function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentry} title='Documentares' isSmall />
      <RowPost url={tvShows} title='TV Shows' isSmall />

    </div>
  )
}

export default HomePage
