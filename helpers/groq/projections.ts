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
  pageBuilder[] {
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
