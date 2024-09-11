import { Restaurant } from '../app/models/Restaurant.model';

export function isRestaurantOpen(restaurant: Restaurant): boolean {
  const currentTime = getCurrentTime();
  const todayDate = new Date().toISOString().split('T')[0];
  const [openingTime, closingTime] = restaurant.openingHours;
  const currentDateTime = new Date(`${todayDate}T${currentTime}`);
  const openingDateTime = new Date(`${todayDate}T${openingTime}`);
  let closingDateTime = new Date(`${todayDate}T${closingTime}`);

  if (closingDateTime <= openingDateTime) {
    closingDateTime.setDate(closingDateTime.getDate() + 1);
  }
  return currentDateTime >= openingDateTime && currentDateTime <= closingDateTime;
}

function getCurrentTime(): string {
  const now = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jerusalem',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
  return now;
}
