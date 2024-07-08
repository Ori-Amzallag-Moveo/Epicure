import { Chef } from "../models/chef.model";

export const chefs: Chef[] = [
  {
    name: 'Yossi Shitrit',
    description: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit\'s creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.',
    restaurants: [
      { name: 'Onza', imgSrc: 'assets/onza.jpg' },
      { name: 'Kitchen Market', imgSrc: 'assets/Lumina.jpg' },
      { name: 'Mashya', imgSrc: 'assets/onza.jpg' }
    ]
  },
  {
    name: 'Eyal Shani',
    description: 'Chef Eyal Shani is an Israeli celebrity chef known for his passion for fresh produce and Mediterranean flavors. He is a judge on the Israeli version of MasterChef.',
    restaurants: [
      { name: 'HaSalon', imgSrc: 'assets/hasalon.jpg' },
      { name: 'Port Said', imgSrc: 'assets/port-said.jpg' },
      { name: 'Miznon', imgSrc: 'assets/miznon.jpg' }
    ]
  },
  {
    name: 'Meir Adoni',
    description: 'Chef Meir Adoni is an acclaimed Israeli chef known for his innovative approach to modern Israeli cuisine. He combines traditional flavors with contemporary techniques.',
    restaurants: [
      { name: 'Lumina', imgSrc: 'assets/lumina.jpg' },
      { name: 'Blue Sky', imgSrc: 'assets/blue-sky.jpg' },
      { name: 'Dalia', imgSrc: 'assets/dalia.jpg' }
    ]
  }
];
