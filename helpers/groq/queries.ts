import { seoProjection, linkProjection } from "./projections";

export const settingsQuery = `
  *[_type == 'site_settings'][0] {
    ...,
    ${seoProjection}
  }
`;

export const mainNavigationQuery = `
  *[_type == 'navigation' && slug.current == 'main-navigation'][0] {
    ...,
    items[]{
      ...,
      ${linkProjection},
      children[]{
        ...,
        ${linkProjection}
      },
    }
  }
`;
