import { Swiper } from './components/Swiper';
import { Results } from './components/Results';

const components = new Map();
components.set('Swiper', Swiper);
components.set('Results', Results);

const componentFactory = (componentName) => components.get(componentName);

export default componentFactory;
