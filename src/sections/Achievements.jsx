import AchievementCard from '../components/AchievementCard'
import { achievements } from '../data/achievements'

function Achievements() {
  return (
    <section className="achievements-section" id="achievements" aria-labelledby="achievements-title">
      <div className="achievements-shell">
        <div className="section-heading achievements-heading">
          <div>
            <p className="section-kicker"><span /> PRACTICE &amp; PARTICIPATION</p>
            <h2 id="achievements-title">Competitive Programming &amp; Achievements</h2>
          </div>
          <p className="section-description">Explore my coding practice, problem-solving journey, projects, and professional profile.</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement) => <AchievementCard key={achievement.title} achievement={achievement} />)}
        </div>
      </div>
    </section>
  )
}

export default Achievements