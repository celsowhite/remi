import {
  seoProjection,
  pageBuilderProjection,
  menuProjection,
} from "./projections";

/*----------------------
Pages
----------------------*/
export const homePageQuery = `
  *[_type == "homePage"][0] {
    ...,
    ${pageBuilderProjection},
    ${seoProjection}
  }
`;

export const blogPageQuery = `
  *[_type == "blogPage"][0] {
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
  *[_type == "postTag" && slug.current == $slug][0] {
    ...,
    ${seoProjection}
  }
`;

/*----------------------
Settings
----------------------*/
export const generalSettingsQuery = `
  *[_type == 'generalSettings'][0] {
    ...,
    ${seoProjection}
  }
`;

export const headerSettingsQuery = `
  *[_type == 'headerSettings'][0] {
    ...,
    menu->${menuProjection}
  }
`;

export const footerSettingsQuery = `
  *[_type == 'footerSettings'][0] {
    ...,
    footerMenu1->${menuProjection},
    footerMenu2->${menuProjection},
    ${seoProjection}
  }
`;

export const socialSettingsQuery = `
  *[_type == 'socialSettings'][0] {
    ...,
    ${seoProjection}
  }
`;
