import {
  seoProjection,
  linkProjection,
  pageBuilderProjection,
} from "./projections";

/* Pages */
export const homePageQuery = `
  *[_type == "general_settings"][0].home_page-> {
    ...,
    ${pageBuilderProjection},
    ${seoProjection}
  }
`;

/* Settings */
export const generalSettingsQuery = `
  *[_type == 'general_settings'][0] {
    ...,
    ${seoProjection}
  }
`;

export const socialSettingsQuery = `
  *[_type == 'social_settings'][0] {
    ...,
    ${seoProjection}
  }
`;

/* Menus */
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
