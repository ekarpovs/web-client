export interface NavigationLink {
  name: string;
  routerLink: string;
  order: number;
  overrideFunction: Function;
}

// export const navigationLinks: NavigationLink[] = [
//   {
//       name: 'Home',
//       routerLink: '/home',
//       // roles: ['Admin', 'RegUser'],
//       order: 0,
//       overrideFunction: function() { console.log('override function clicked'); }
//   }
// ];


// @TO DO: How to get dinamically???
export const navigationLinks = [
  {
      name: 'Home',
      routerLink: '/home',
      // roles: ['Admin', 'RegUser'],
      order: 0,
      overrideFunction: function() { console.log('override function clicked'); }
  },
  {
    name: 'Forecast',
    routerLink: '/dashboard/forecast',
    // roles: ['Admin', 'RegUser'],
    order: 2,
    overrideFunction: function() { console.log('override function clicked'); }
  }
];
