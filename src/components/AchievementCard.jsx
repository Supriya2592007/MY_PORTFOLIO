function AchievementCard({ achievement }) {
  return (
    <article className="achievement-card">
      <div className="achievement-card-top">
        <span className="achievement-icon" aria-hidden="true">{achievement.icon}</span>
        <span className="achievement-index" aria-hidden="true">PROFILE</span>
      </div>
      <h3>{achievement.title}</h3>
      <p>{achievement.description}</p>
      {achievement.link && (
        <a className="achievement-link" href={achievement.link} target="_blank" rel="noopener noreferrer">
          View Profile <span aria-hidden="true">↗</span>
        </a>
      )}
      {!achievement.link && (
        <button className="achievement-link is-disabled" type="button" disabled>
          {achievement.linkPlaceholder}
        </button>
      )}
    </article>
  )
}

export default AchievementCard