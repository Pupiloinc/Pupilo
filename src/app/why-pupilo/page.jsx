import BrandMarquee from '@/components/home/BrandMarquee'
import FutureInnovators from '@/components/why-pupilo/FutureInnovators'
import LearnOurDifference from '@/components/why-pupilo/LearnOurDifference'
import OurMission from '@/components/why-pupilo/OurMission'
import PupiloHero from '@/components/why-pupilo/PupiloHero'

const page = () => {
  return (
    <div>
      <PupiloHero />
      <BrandMarquee />
      <FutureInnovators />
      <LearnOurDifference />
      <OurMission />
    </div>
  )
}

export default page