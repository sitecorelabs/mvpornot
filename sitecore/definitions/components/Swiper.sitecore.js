import { addComponent, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest) => {
  addComponent(manifest, {
    name: 'Swiper',
    displayName: 'Swiper',
    fields: [{ name: 'mvps', type: CommonFieldTypes.ContentList }],
  });
};
