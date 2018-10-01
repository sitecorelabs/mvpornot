import { Swiper } from './components/Swiper';

const components = new Map();
components.set('Swiper', Swiper);

const componentFactory = (componentName) => components.get(componentName);

export default componentFactory;
