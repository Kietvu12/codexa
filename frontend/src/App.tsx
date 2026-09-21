import { HeroAchievementCards, HeroVisual, HeroVisualContent } from './components/hero'
import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  ProblemSection,
  ProcessSection,
} from './components/home'
import { MainLayout } from './components/layout'

function App() {
  return (
    <MainLayout
      activeNav="trang-chu"
      hero={
        <>
          <HeroVisual activeNav="trang-chu">
            <HeroVisualContent />
          </HeroVisual>
          <HeroAchievementCards />
        </>
      }
    >
      <ProblemSection />
      <FeaturesSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </MainLayout>
  )
}

export default App
