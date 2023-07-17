export const seoProjection = `
  seo{
    ...,
    image {
      ...,
      asset-> {
        url
      }
    }
  }
`;

export const pageBuilderProjection = `
  page_builder[] {
    ...,
  }
`;

export const menuProjection = `
  {
    ...,
    items[]{
      ...,
      children[]{
        ...,
      },
    }
  }
`;
