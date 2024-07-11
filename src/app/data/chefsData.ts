import { Chef } from "../models/chef.model";

export const chefsData: Chef[] = [
  {
    name: 'Yossi Shitrit',
    imgSrc: 'assets/chefs/yossi-shitrit.jpg',
    description: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit\'s creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.',
    restaurants: [
      { name: 'Onza', imgSrc: 'assets/restaurants/onza.jpg' },
      { name: 'Kitchen Market', imgSrc: 'assets/restaurants/lumina.jpg' },
      { name: 'Mashya', imgSrc: 'assets/restaurants/popina.jpg' }
    ]
  },
  {
    name: 'Eyal Shani',
    imgSrc: 'assets/chefs/eyal-shani.jpg',
    description: 'Chef Eyal Shani is an Israeli celebrity chef known for his passion for fresh produce and Mediterranean flavors. He is a judge on the Israeli version of MasterChef.',
    restaurants: [
      { name: 'HaSalon', imgSrc: 'assets/restaurants/kab-kem.jpg' },
      { name: 'Port Said', imgSrc: 'assets/restaurants/yapan.jpg' },
      { name: 'Miznon', imgSrc: 'assets/restaurants/miznon.jpg' }
    ]
  },
  {
    name: 'Meir Adoni',
    imgSrc: 'assets/chefs/meir-adoni.jpg',
    description: 'Chef Meir Adoni is an acclaimed Israeli chef known for his innovative approach to modern Israeli cuisine. He combines traditional flavors with contemporary techniques.',
    restaurants: [
      { name: 'Lumina', imgSrc: 'assets/restaurants/lumina.jpg' },
      { name: 'Blue Sky', imgSrc: 'assets/restaurants/blue-sky.jpg' },
      { name: 'Dalia', imgSrc: 'assets/restaurants/dalia.jpg' }
    ]
  }
];