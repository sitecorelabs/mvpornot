// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addTemplate({
    name: 'Swiper-Item-Template',
    fields: [
      { name: 'name', type: CommonFieldTypes.SingleLineText },
      { name: 'image', type: CommonFieldTypes.Image },
    ],
  });
}
