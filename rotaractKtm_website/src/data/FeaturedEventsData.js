import Images from '../assets/featuredimages'


export const allFeaturedEvents = [
  // --- UPCOMING EVENTS (These will show on the homepage) ---
  {
    id: 1,
    date: 'July 15, 2025',
    title: 'Khana Sambad',
    description: 'Free health checkups and awareness program for underserved communities.',
    image:Images.img1,
    show: true,
  },
  {
    id: 2,
    date: 'August 5, 2025',
    title: 'Hunger Walk',
    description: 'Interactive workshop focusing on developing leadership skills for young professionals.',
    image:Images.img2,
    show: true,
  },
  {
    id: 3,
    date: 'September 20, 2025',
    title: 'Environmental Clean-Up Drive',
    description: 'Join us in cleaning and preserving our local natural spaces.',
    image:Images.img3,
    show: true,
  },

  

  // ---  EVENTS (These will NOT show on the homepage) ---
  {
    id: 4,
    date: 'September 24, 2025',
    title: 'Dental Campaign',
    description: 'Join us for making your smile and your teeth, as attractive as your beautiful soul.',
    image:Images.img4,
    show: false,
  },
  {
    id: 5,
    date: 'October 10, 2025',
    title: 'Meditation Camp',
    description: 'We had a really amazing session for maintaining our good mental health this week.',
    image:Images.img5,
    show: false,
  },
];