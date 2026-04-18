import { devices, Device } from './devices';

export type QuizAnswers = {
  major: string;
  budget: string;
  usage: string;
  os: string;
  portability: string;
  battery: string;
  priority: string;
};

const budgetRanges: Record<string, [number, number]> = {
  low: [0, 2000],
  mid: [2000, 3500],
  high: [3500, 5000],
  premium: [5000, 12000]
};

const majorBoost: Record<string, string[]> = {
  Business: ['Business'],
  'Computer Science': ['Computer Science'],
  Engineering: ['Engineering', 'Architecture'],
  'Graphic Design': ['Graphic Design', 'Media'],
  Architecture: ['Architecture', 'Engineering'],
  Medicine: ['Medicine', 'General Studies'],
  Media: ['Media', 'Graphic Design'],
  'General Studies': ['General Studies', 'Business']
};

function parseRam(ram: string) {
  return parseInt(ram, 10) || 8;
}

export function scoreDevice(device: Device, answers: QuizAnswers) {
  let score = 0;

  if (majorBoost[answers.major]?.some((m) => device.major_suitability.includes(m))) score += 25;
  if (device.use_case_suitability.includes(answers.usage)) score += 20;
  if (answers.os === 'No preference' || device.os === answers.os) score += 10;

  const [minB, maxB] = budgetRanges[answers.budget] ?? [0, 999999];
  if (device.price_myr >= minB && device.price_myr <= maxB) score += 20;
  else if (device.price_myr <= maxB + 1000) score += 8;

  const ram = parseRam(device.ram);
  if (answers.major === 'Computer Science' && ram >= 16) score += 10;
  if (answers.major === 'Engineering' && (ram >= 16 || device.gpu.toLowerCase().includes('rtx'))) score += 10;
  if (answers.major === 'Graphic Design' && (device.gpu.toLowerCase().includes('rtx') || device.display.includes('2.5K') || device.display.includes('Retina'))) score += 10;
  if (answers.portability === 'Very important' && parseFloat(device.weight) <= 1.5) score += 8;
  if (answers.battery === 'Very important' && parseInt(device.battery, 10) >= 10) score += 8;

  if (answers.priority === 'Lowest price' && device.price_myr <= 3000) score += 8;
  if (answers.priority === 'High performance' && (ram >= 16 || device.gpu.toLowerCase().includes('rtx'))) score += 8;
  if (answers.priority === 'Premium quality' && (device.brand === 'Apple' || device.price_myr > 5000)) score += 8;

  return Math.min(score, 100);
}

export function getTopRecommendations(answers: QuizAnswers) {
  return devices
    .map((device) => ({ device, match: scoreDevice(device, answers) }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3)
    .map((item) => ({
      ...item,
      reason: `${item.device.brand} ${item.device.model} matches your ${answers.major} profile, ${answers.usage.toLowerCase()} use case, and budget direction.`
    }));
}
