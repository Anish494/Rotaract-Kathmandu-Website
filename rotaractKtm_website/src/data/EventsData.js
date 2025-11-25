

export const allEvents = [
  // --- UPCOMING EVENTS (These will show on the homepage) ---
  {
    id: 1,
    title: 'Youth Leadership Seminar',
    date: 'Saturday, November 9, 2024',
    dateTime: new Date('2024-11-09T10:00:00'), // Use a Date object for sorting
    time: '10:00 AM - 3:00 PM',
    description: 'A workshop focused on developing leadership skills for young professionals.',
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'Community Clean-up Drive',
    date: 'Sunday, November 3, 2024',
    dateTime: new Date('2024-11-03T09:00:00'),
    time: '9:00 AM - 12:00 PM',
    description: 'Join us in making our community cleaner and greener. Location: Thamel Area.',
    isUpcoming: true,
  },
  {
    id: 3,
    title: 'Weekly Club Meeting',
    date: 'Saturday, October 26, 2024', // This date is past the current context time (Nov 3, 2025)
    dateTime: new Date('2024-10-26T16:00:00'),
    time: '4:00 PM - 5:30 PM',
    description: 'Our regular meeting to discuss ongoing projects, plan new initiatives, and fellowship.',
    isUpcoming: true, // We will manually manage the three events shown for the homepage
  },

  // --- PAST EVENTS (These will NOT show on the homepage) ---
  {
    id: 4,
    title: 'Annual Fundraiser Gala',
    date: 'Friday, June 14, 2024',
    dateTime: new Date('2024-06-14T18:00:00'),
    time: '6:00 PM - 9:00 PM',
    description: 'Our biggest event of the year, raising funds for local school supplies.',
    isUpcoming: false,
  },
  {
    id: 5,
    title: 'New Member Orientation',
    date: 'Saturday, January 20, 2024',
    dateTime: new Date('2024-01-20T10:00:00'),
    time: '10:00 AM - 12:00 PM',
    description: 'Welcome and training session for our newest Rotaractors.',
    isUpcoming: false,
  },
];