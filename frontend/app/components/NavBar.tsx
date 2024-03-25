import React from 'react'
import DefaultNavBar from '@/app/components/navbar/DefaultNavBar'
import CompactNavBar from '@/app/components/navbar/CompactNavBar'

const NavBar = () => {
  return (
    <div>
      <CompactNavBar />
      <DefaultNavBar />
    </div>
  )
}

export default NavBar
