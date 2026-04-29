import { Player } from '../data/leagues';

/**
 * Calculates a player's market value based on OVR, potential, and age.
 * Base logic follows the user's tiers for OVR.
 */
export const getPlayerValue = (player: Player): number => {
  // Requirement: Youth players from scout reports initially have 10M value
  // and only show true value after 10 matches.
  if (player.isYouthPlayer && (player.matchesPlayedAsYouth || 0) < 10) {
    return 10;
  }

  let baseValue = 0;
  const ovr = player.rating;

  // Base cost based on rating (user requested "aged" but context implies rating)
  if (ovr >= 90) {
    baseValue = 105;
  } else if (ovr >= 85) {
    baseValue = 80;
  } else if (ovr >= 80) {
    baseValue = 65;
  } else if (ovr >= 75) {
    baseValue = 40;
  } else if (ovr >= 70) {
    baseValue = 25;
  } else if (ovr >= 65) {
    baseValue = 15;
  } else {
    baseValue = 10; // 60-64 (and below)
  }

  // Age multiplier
  let ageMultiplier = 1.0;
  const age = player.age;

  if (age <= 19) {
    ageMultiplier = 1.25; // +25%
  } else if (age <= 24) {
    ageMultiplier = 1.14; // +14%
  } else if (age <= 28) {
    ageMultiplier = 1.06; // +6%
  } else if (age <= 32) {
    ageMultiplier = 1.03; // +3%
  } else if (age <= 36) {
    ageMultiplier = 1.15; // +15%
  } else {
    ageMultiplier = 1.40; // +40% (37-42+)
  }

  return Math.round(baseValue * ageMultiplier);
};

/**
 * Calculates the starting budget for a team based on its rating.
 */
export const getStartingBudget = (teamRating: number): number => {
  if (teamRating < 75) return 20;
  if (teamRating < 80) return 35;
  if (teamRating < 85) return 60;
  if (teamRating < 90) return 90;
  return 110;
};
