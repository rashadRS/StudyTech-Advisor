export type Lang = 'ar' | 'en';

export type Device = {
  id: string;
  brand: string;
  model: string;
  category: string;
  major_suitability: string[];
  use_case_suitability: string[];
  os: string[];
  ram: string;
  cpu: string;
  storage: string;
  gpu: string;
  battery: string;
  display: string;
  weight: string;
  price_myr: number;
  image: string;
  description: string;
  buy_link: string;
  recommended_for: string;
  condition?: string;
};

export type QuizAnswers = {
  major: string;
  budget: string;
  usage: string;
  os: string;
  portability: string;
  battery: string;
  priority: string;
};
