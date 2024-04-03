import DefaultNavBar from '@/app/components/navbar/DefaultNavBar'
import CompactNavBar from '@/app/components/navbar/CompactNavBar'

const NavBar = ({ params }: any) => {
  return (
    <div>
      <CompactNavBar params={params} />
      <DefaultNavBar params={params} />
    </div>
  )
}

export default NavBar
