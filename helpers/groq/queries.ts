import {
  seoProjection,
  linkProjection,
  pageBuilderProjection,
  menuProjection,
} from "./projections";

/* Pages */
export const homePageQuery = `
  *[_type == "home_page"][0] {
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

export const headerSettingsQuery = `
  *[_type == 'header_settings'][0] {
    ...,
    ${menuProjection}
  }
`;

export const footerSettingsQuery = `
  *[_type == 'footer_settings'][0] {
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
