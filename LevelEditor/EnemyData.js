// --- Common Enemy & Boss Statistics ---
const ENEMY_STATS = {
  bat: { hp: 1, vy: 200, size: 14 },
  gbat: { hp: 3, vy: 130, size: 21, moveInterval: 2 },
  skeleton: { hp: 5, vy: 68, size: 18, shootInterval: 2, bulletVy: 205, exitTime: 5 },
  pskeleton: { hp: 5, vy: 68, size: 18, shootInterval: 2, bulletVy: 200, exitTime: 5.5 }
};

const BOSS_STATS = {
  hp: 80, vy: 65, size: 48, settleY: 118, phaseInterval: 6
};

// Export for Node environments if needed, but primarily for browser global access
if (typeof module !== 'undefined') {
  module.exports = { ENEMY_STATS, BOSS_STATS };
}
