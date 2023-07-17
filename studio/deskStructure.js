import {CogIcon, ControlsIcon, DocumentsIcon, EarthGlobeIcon} from '@sanity/icons'

export const structure = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.documentList().title('Pages').filter('_type in ["page", "home_page", "blog_page"]')
        ),
      S.listItem()
        .title('Posts')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Posts')
            .items([
              S.documentTypeListItem('post').title('All Posts'),
              S.documentTypeListItem('post_tag').title('Tags'),
            ])
        ),
      S.documentTypeListItem('menu').title('Menus'),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .showIcon(false)
                .child(S.document().schemaType('general_settings').documentId('general_settings')),
              S.listItem()
                .title('Header')
                .showIcon(false)
                .child(S.document().schemaType('header_settings').documentId('header_settings')),
              S.listItem()
                .title('Footer')
                .showIcon(false)
                .child(S.document().schemaType('footer_settings').documentId('footer_settings')),
              S.listItem()
                .title('Social')
                .showIcon(false)
                .child(S.document().schemaType('social_settings').documentId('social_settings')),
            ])
        ),
    ])
}
