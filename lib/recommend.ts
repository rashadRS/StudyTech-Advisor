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
  return devices.map((d) => {
    let score = 35;
    if (d.major_suitability.includes(answers.major)) score += 20;
    if (d.use_case_suitability.includes(answers.usage)) score += 15;
    if (answers.os === 'No preference' || d.os.includes(answers.os)) score += 10;
    if (d.price_myr >= budget[0] && d.price_myr <= budget[1]) score += 15;
    if (answers.priority === 'High performance' && /RTX|M3|i7|Ryzen 7/.test(`${d.gpu} ${d.cpu}`)) score += 10;
    if (answers.priority === 'Lowest price' && d.price_myr < 3000) score += 10;
    if (answers.portability === 'Very important' && parseFloat(d.weight) <= 1.5) score += 7;
    if (answers.battery === 'Very important' && parseInt(d.battery) >= 10) score += 7;
    return { device: d, match: Math.min(99, score), reason: `${d.recommended_for} Suitable for ${answers.major}.` };
  }).sort((a, b) => b.match - a.match).slice(0, 3);
}
