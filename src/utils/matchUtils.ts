export const simulateMatchResult = (homeRating: number, awayRating: number, isKnockout: boolean = false): { homeScore: number, awayScore: number } => {
  const homeAdv = 2;
  const diff = (homeRating + homeAdv) - awayRating;
  // Base probability 0.45, adjusted by rating difference. 
  // If diff is +10, prob is 0.45 + 0.4 = 0.85. 
  // If diff is -10, prob is 0.45 - 0.4 = 0.05.
  const homeProb = Math.max(0.05, Math.min(0.95, 0.45 + (diff * 0.04)));
  const drawProb = 0.22;
  
  const rand = Math.random();
  
  let homeScore = 0;
  let awayScore = 0;

  if (rand < homeProb) {
    // Home Win
    homeScore = Math.floor(Math.random() * 3) + 1; // 1, 2, 3
    // Ensure away score is less than home score
    awayScore = Math.floor(Math.random() * homeScore); 
  } else if (rand < homeProb + drawProb) {
    // Draw
    homeScore = Math.floor(Math.random() * 3); // 0, 1, 2
    awayScore = homeScore;
  } else {
    // Away Win
    awayScore = Math.floor(Math.random() * 3) + 1; // 1, 2, 3
    homeScore = Math.floor(Math.random() * awayScore);
  }

  // If knockout and draw, force a winner
  if (isKnockout && homeScore === awayScore) {
    if (Math.random() > 0.5) homeScore += 1;
    else awayScore += 1;
  }

  return { homeScore, awayScore };
};
