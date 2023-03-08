export const linkProjection = `
  link {
    ...,
    "internal": internal->slug.current
  }
`;

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
    _type == "hero" => {
      ...,
      button {
        ...,
        ${linkProjection}
      }
    },
    _type == "text_banner" => {
      ...,
      button {
        ...,
        ${linkProjection}
      }
    },
    _type == "card_grid" => {
      ...,
      cards[]{
        ...,
        button {
          ...,
          ${linkProjection}
        }
      }
    },
    _type == "image_text_panel" => {
      ...,
      button {
        ...,
        ${linkProjection}
      }
    }
  }
`;

export const menuProjection = `
  {
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
