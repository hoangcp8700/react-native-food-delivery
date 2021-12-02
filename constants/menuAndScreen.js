import icons from './icons'

const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favorite: 'Favorite',
  notification: 'Notification',
  myWallet: 'My Wallet',
  trackOrder: 'Track Your Order',
  coupons: 'Coupons',
  settings: 'Settings',
  helps: 'Helps',
}

const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/favorite_food.png'),
    title: 'Choose a Favorite Food',
    description:
      'When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards',
  },
  {
    id: 2,
    backgroundImage: require('../assets/images/background_02.png'),
    bannerImage: require('../assets/images/hot_delivery.png'),
    title: 'Hot Delivery to Home',
    description:
      'We make food ordering fasr, simple and free-no matter if you order online or cash',
  },
  {
    id: 3,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/great_food.png'),
    title: 'Receive the Great Food',
    description:
      'You’ll receive the great food within a hour. And get free delivery credits for every order.',
  },
]

const drawer_screen = [
  {
    label: screens.home,
    icon: icons.home,
  },
  {
    label: screens.myWallet,
    icon: icons.wallet,
  },
  {
    label: screens.notification,
    icon: icons.notification,
  },
  {
    label: screens.favorite,
    icon: icons.favorite,
  },
]

const drawer_screen_other = [
  {
    label: screens.trackOrder,
    icon: icons.location,
  },
  {
    label: screens.coupons,
    icon: icons.coupon,
  },
  {
    label: screens.settings,
    icon: icons.setting,
  },
  {
    label: screens.helps,
    icon: icons.help,
  },
]

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
    icon: icons.home,
  },
  {
    id: 1,
    label: screens.search,
    icon: icons.search,
  },
  {
    id: 2,
    label: screens.cart,
    icon: icons.cart,
  },
  {
    id: 3,
    label: screens.favorite,
    icon: icons.favorite,
  },
  {
    id: 4,
    label: screens.notification,
    icon: icons.notification,
  },
]

const delivery_time = [
  {
    id: 1,
    label: '10 Mins',
  },
  {
    id: 2,
    label: '20 Mins',
  },
  {
    id: 3,
    label: '30 Mins',
  },
]

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
]

const tags = [
  {
    id: 1,
    label: 'Burger',
  },
  {
    id: 2,
    label: 'Fast Food',
  },
  {
    id: 3,
    label: 'Pizza',
  },
  {
    id: 4,
    label: 'Asian',
  },
  {
    id: 5,
    label: 'Dessert',
  },
  {
    id: 6,
    label: 'Breakfast',
  },
  {
    id: 7,
    label: 'Vegetable',
  },
  {
    id: 8,
    label: 'Taccos',
  },
]

export default {
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
  drawer_screen,
  drawer_screen_other,
  onboarding_screens,
}
