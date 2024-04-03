import DefaultNavBar from '@/app/components/navbar/DefaultNavBar'
import CompactNavBar from '@/app/components/navbar/CompactNavBar'

const NavBar = ({ params }: any) => {
  return (
    <div className='sticky left-0 right-0 top-0 w-full z-10'>
      <CompactNavBar params={params} />
      <DefaultNavBar params={params} />
    </div>
  )
}

export default NavBar
