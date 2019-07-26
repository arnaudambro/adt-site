
const getTitle = ({ title }) => title;
const getDescription = ({ properties: { description } }) => description;
const getMaterial = ({ properties: { material } }) => material;
const getMaterialHeight = ({ presentation: { height } }) => height;
const getWinDate = ({ properties: { dates: { win } } }) => new Date(win);
const getDeliveryDate = ({ properties: { dates: { delivery } } }) => new Date(delivery);
const getDeliveryDisplayed = projet => {
  const deliveryDate = getDeliveryDate(projet);
  const formattedDate = getDeliveryDate(projet).toLocaleString('fr', { month: 'short', year: 'numeric' });
  return Date.now() < deliveryDate.getTime()
  ? `Livré ${formattedDate}`
  : `Livraison ${formattedDate}`
}
const getImagePropsForGatsby = ({ node: { fluid }}) => fluid;
const getImageSrcFromImages = ({ node: { fluid: { src }}}) => src;
const getMaterialImageSrc = ({ presentation: { image } }) => encodeURIComponent(image);
const getLocation = ({ properties: { city, departmentName, country } }) => `${city}, ${departmentName}, ${country}`
const getSurface = ({ properties: { size } }) => size


const getNewsDescription = news => news.description;
const getNewsHeight = news => news.images.reduce((newsHeight, { height }) => {
  return newsHeight + height + 10
}, -10);
const getNewsImageFile = image => image.file;
const getNewsDate = news => (new Date(news.date)).toLocaleString('fr', { month: 'long', year: 'numeric', day: 'numeric' })

export {
  getTitle,
  getDescription,
  getMaterial,
  getMaterialHeight,
  getWinDate,
  getDeliveryDate,
  getDeliveryDisplayed,
  getImagePropsForGatsby,
  getImageSrcFromImages,
  getMaterialImageSrc,
  getLocation,
  getSurface,
  getNewsDate,
  getNewsDescription,
  getNewsImageFile,
  getNewsHeight
}
