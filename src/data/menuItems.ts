export interface MenuItem {
  text: string;
  url: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Communities',
    url: '/communities',
    children: [
      { text: 'Summerlin West', url: '/communities/summerlin-west' },
      { text: 'The Ridges', url: '/communities/the-ridges' },
      { text: 'The Summit', url: '/communities/the-summit' },
      { text: 'Skye Canyon', url: '/communities/skye-canyon' },
      { text: 'Centennial Hills', url: '/communities/centennial-hills' },
      { text: 'Henderson', url: '/communities/henderson' },
      { text: '55+ Communities', url: '/communities/55-plus-communities' },
    ],
  },
  {
    text: 'Market Segments',
    url: '#',
    children: [
      { text: 'Luxury Homes', url: '/luxury-homes' },
      { text: '55+ Living', url: '/55-plus-living' },
      { text: 'New Construction', url: '/new-construction' },
      { text: 'Investors', url: '/investors' },
      { text: 'Selling Your Home', url: '/sell-your-home' },
      { text: 'Divorce Real Estate', url: '/divorce-real-estate' },
      { text: 'Probate Real Estate', url: '/probate-real-estate' },
    ],
  },
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Contact',
    url: '/contact',
  },
];
