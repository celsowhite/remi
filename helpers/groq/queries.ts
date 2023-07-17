import {
  seoProjection,
  pageBuilderProjection,
  menuProjection,
} from "./projections";

/*----------------------
Pages
----------------------*/
export const homePageQuery = `
  *[_type == "home_page"][0] {
    ...,
    ${pageBuilderProjection},
    ${seoProjection}
  }
`;

export const blogPageQuery = `
  *[_type == "blog_page"][0] {
    ...,
    ${seoProjection}
  }
`;

/*----------------------
Posts
----------------------*/
export const postsQuery = `
  *[_type == "post"] {
    ...,
  }
`;

export const postsByTagQuery = `
  *[_type == "post" && (count((tags[]->slug.current)[@ in [$slug]]) > 0)] {
    ...
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    tags[]->,
    ${pageBuilderProjection},
    ${seoProjection}
  }
`;

/*----------------------
Taxonomies
----------------------*/
export const postTagQuery = `
  *[_type == "post_tag" && slug.current == $slug][0] {
    ...,
    ${seoProjection}
  }
`;

/*----------------------
Settings
----------------------*/
export const generalSettingsQuery = `
  *[_type == 'general_settings'][0] {
    ...,
    ${seoProjection}
  }
`;

export const headerSettingsQuery = `
  *[_type == 'header_settings'][0] {
    ...,
    menu->${menuProjection}
  }
`;

export const footerSettingsQuery = `
  *[_type == 'footer_settings'][0] {
    ...,
    footer_menu_1->${menuProjection},
    footer_menu_2->${menuProjection},
    ${seoProjection}
  }
`;

export const socialSettingsQuery = `
  *[_type == 'social_settings'][0] {
    ...,
    ${seoProjection}
  }
`;
