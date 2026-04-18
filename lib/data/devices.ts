export type Device = {
  id: string;
  brand: string;
  model: string;
  category: 'laptop' | 'tablet' | 'desktop';
  major_suitability: string[];
  use_case_suitability: string[];
  os: 'Windows' | 'macOS' | 'Linux';
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
  condition?: 'New' | 'Used - Excellent' | 'Used - Good';
};

export const devices: Device[] = [
  {
    id: 'dell-inspiron-14',
    brand: 'Dell',
    model: 'Inspiron 14 5430',
    category: 'laptop',
    major_suitability: ['Business', 'Computer Science', 'General Studies'],
    use_case_suitability: ['General study', 'Programming', 'Everyday productivity'],
    os: 'Windows',
    ram: '16GB',
    cpu: 'Intel Core i5 13th Gen',
    storage: '512GB SSD',
    gpu: 'Intel Iris Xe',
    battery: '11 hours',
    display: '14" FHD',
    weight: '1.59kg',
    price_myr: 3399,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    description: 'Balanced performance laptop for coding and coursework.',
    buy_link: '#',
    recommended_for: 'Computer science and business students who need portability and reliable performance.'
  },
  {
    id: 'asus-tuf-a15',
    brand: 'ASUS',
    model: 'TUF A15',
    category: 'laptop',
    major_suitability: ['Engineering', 'Architecture', 'Media'],
    use_case_suitability: ['3D / engineering software', 'Video editing', 'Gaming + study'],
    os: 'Windows',
    ram: '16GB',
    cpu: 'AMD Ryzen 7',
    storage: '1TB SSD',
    gpu: 'NVIDIA RTX 4060',
    battery: '8 hours',
    display: '15.6" 144Hz',
    weight: '2.2kg',
    price_myr: 4899,
    image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8',
    description: 'High performance machine for engineering software and rendering.',
    buy_link: '#',
    recommended_for: 'Students needing strong GPU and multicore performance.'
  },
  {
    id: 'lenovo-thinkpad-e14',
    brand: 'Lenovo ThinkPad',
    model: 'E14 Gen 5',
    category: 'laptop',
    major_suitability: ['Business', 'Medicine', 'Computer Science'],
    use_case_suitability: ['General study', 'Programming', 'Everyday productivity'],
    os: 'Windows',
    ram: '16GB',
    cpu: 'Intel Core i7',
    storage: '512GB SSD',
    gpu: 'Integrated',
    battery: '12 hours',
    display: '14" FHD',
    weight: '1.4kg',
    price_myr: 4199,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2',
    description: 'Durable and lightweight laptop with great keyboard and battery.',
    buy_link: '#',
    recommended_for: 'Students who want durability, battery life, and balanced power.'
  },
  {
    id: 'apple-macbook-air-m3',
    brand: 'Apple',
    model: 'MacBook Air M3',
    category: 'laptop',
    major_suitability: ['Media', 'Graphic Design', 'Business'],
    use_case_suitability: ['Design', 'Video editing', 'Everyday productivity'],
    os: 'macOS',
    ram: '16GB',
    cpu: 'Apple M3',
    storage: '512GB SSD',
    gpu: 'Integrated 10-core GPU',
    battery: '18 hours',
    display: '13.6" Liquid Retina',
    weight: '1.24kg',
    price_myr: 5999,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    description: 'Premium quality laptop with excellent battery and display.',
    buy_link: '#',
    recommended_for: 'Students prioritizing battery life, premium build, and color-accurate display.'
  },
  {
    id: 'huawei-matebook-d14',
    brand: 'Huawei',
    model: 'MateBook D14',
    category: 'laptop',
    major_suitability: ['Medicine', 'General Studies', 'Business'],
    use_case_suitability: ['General study', 'Everyday productivity'],
    os: 'Windows',
    ram: '8GB',
    cpu: 'Intel Core i5',
    storage: '512GB SSD',
    gpu: 'Integrated',
    battery: '10 hours',
    display: '14" FHD',
    weight: '1.38kg',
    price_myr: 2699,
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef',
    description: 'Affordable and portable for everyday student needs.',
    buy_link: '#',
    recommended_for: 'Students with medium budget seeking lightweight daily device.'
  },
  {
    id: 'acer-aspire-5',
    brand: 'Acer',
    model: 'Aspire 5',
    category: 'laptop',
    major_suitability: ['General Studies', 'Business', 'Computer Science'],
    use_case_suitability: ['General study', 'Programming', 'Everyday productivity'],
    os: 'Windows',
    ram: '16GB',
    cpu: 'Intel Core i5',
    storage: '512GB SSD',
    gpu: 'NVIDIA MX550',
    battery: '9 hours',
    display: '15.6" FHD',
    weight: '1.8kg',
    price_myr: 2999,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
    description: 'Great value laptop for mixed university workloads.',
    buy_link: '#',
    recommended_for: 'Students who want balanced performance at lower mid-range budget.'
  },
  {
    id: 'hp-envy-16',
    brand: 'HP',
    model: 'Envy 16',
    category: 'laptop',
    major_suitability: ['Graphic Design', 'Media', 'Architecture'],
    use_case_suitability: ['Design', 'Video editing', '3D / engineering software'],
    os: 'Windows',
    ram: '32GB',
    cpu: 'Intel Core i7',
    storage: '1TB SSD',
    gpu: 'NVIDIA RTX 4050',
    battery: '9 hours',
    display: '16" 2.5K',
    weight: '2.3kg',
    price_myr: 6799,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    description: 'Powerful premium laptop for creators and architecture students.',
    buy_link: '#',
    recommended_for: 'Demanding workloads with high graphics and rendering needs.'
  }
];

export const budgetDevices: Device[] = [
  {
    id: 'budget-thinkpad-x280',
    brand: 'Lenovo ThinkPad',
    model: 'X280',
    category: 'laptop',
    major_suitability: ['General Studies', 'Business'],
    use_case_suitability: ['General study', 'Everyday productivity'],
    os: 'Windows',
    ram: '8GB',
    cpu: 'Intel Core i5 8th Gen',
    storage: '256GB SSD',
    gpu: 'Integrated',
    battery: '7 hours',
    display: '12.5" FHD',
    weight: '1.3kg',
    price_myr: 1299,
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29',
    description: 'Reliable refurbished ThinkPad for daily academic tasks.',
    buy_link: 'https://www.bbtech.shop/',
    recommended_for: 'Students needing robust keyboard and portability.',
    condition: 'Used - Excellent'
  },
  {
    id: 'budget-dell-latitude-7490',
    brand: 'Dell',
    model: 'Latitude 7490',
    category: 'laptop',
    major_suitability: ['Medicine', 'Business', 'General Studies'],
    use_case_suitability: ['General study', 'Everyday productivity'],
    os: 'Windows',
    ram: '8GB',
    cpu: 'Intel Core i5 8th Gen',
    storage: '256GB SSD',
    gpu: 'Integrated',
    battery: '8 hours',
    display: '14" FHD',
    weight: '1.4kg',
    price_myr: 1499,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    description: 'Affordable and dependable for assignments and online classes.',
    buy_link: 'https://www.bbtech.shop/',
    recommended_for: 'Students looking for affordable reliable performance.',
    condition: 'Used - Good'
  },
  {
    id: 'budget-hp-elitebook-840',
    brand: 'HP',
    model: 'EliteBook 840 G5',
    category: 'laptop',
    major_suitability: ['Computer Science', 'Business'],
    use_case_suitability: ['Programming', 'Everyday productivity'],
    os: 'Windows',
    ram: '16GB',
    cpu: 'Intel Core i7 8th Gen',
    storage: '512GB SSD',
    gpu: 'Integrated',
    battery: '7 hours',
    display: '14" FHD',
    weight: '1.5kg',
    price_myr: 1899,
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d',
    description: 'Strong budget performer with more RAM for coding multitasking.',
    buy_link: 'https://www.bbtech.shop/',
    recommended_for: 'Students who want more RAM without high price.',
    condition: 'Used - Excellent'
  }
];
