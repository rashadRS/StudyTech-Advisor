import { devices } from '@/data/devices';
import { Device, QuizAnswers } from '@/lib/types';

const budgetMap: Record<string, [number, number]> = {
  'Below RM 2000': [0, 2000],
  'RM 2000 - RM 3500': [2000, 3500],
  'RM 3500 - RM 5000': [3500, 5000],
  'Above RM 5000': [5000, 99999]
};

export function recommendDevices(answers: QuizAnswers): { device: Device; match: number; reason: string }[] {
  const budget = budgetMap[answers.budget] ?? [0, 99999];

  return devices
    .map((d) => {
      let score = 25;
      const reasons: string[] = [];
      if (d.major_suitability.includes(answers.major)) {
        score += 20;
        reasons.push('major fit');
      }
      if (d.use_case_suitability.includes(answers.usage)) {
        score += 15;
        reasons.push('usage fit');
      }
      if (answers.os === 'No preference' || d.os.includes(answers.os)) {
        score += 8;
        reasons.push('OS preference');
      }
      if (d.price_myr >= budget[0] && d.price_myr <= budget[1]) {
        score += 15;
        reasons.push('budget range');
      }
      if (answers.heavySoftware === 'Yes' && /RTX|M3|i7|Ryzen 7/.test(`${d.cpu} ${d.gpu}`)) {
        score += 10;
        reasons.push('heavy software ready');
      }
      if (answers.valuePerformance === 'Best value' && d.price_myr <= 3500) {
        score += 8;
        reasons.push('value-focused');
      }
      if (answers.valuePerformance === 'Best performance' && /RTX|M3|i7|Ryzen 7/.test(`${d.cpu} ${d.gpu}`)) {
        score += 8;
        reasons.push('high performance');
      }
      if (answers.portability === 'Very important' && parseFloat(d.weight) <= 1.5) {
        score += 8;
        reasons.push('portable weight');
      }
      if (answers.battery === 'Very important' && parseInt(d.battery, 10) >= 10) {
        score += 8;
        reasons.push('strong battery');
      }
      if (answers.years === '4+ years' && /i7|Ryzen 7|M3|16GB|32GB/.test(`${d.cpu} ${d.ram}`)) {
        score += 8;
        reasons.push('long-term durability');
      }
      return {
        device: d,
        match: Math.min(99, score),
        reason: reasons.length ? reasons.join(', ') : d.recommended_for
      };
    })
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}
