import {CogIcon, ControlsIcon, DocumentsIcon, EarthGlobeIcon} from '@sanity/icons'

export const structure = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Landing')
                .child(
                  S.list()
                    .title('Landing')
                    .items([
                      S.listItem()
                        .title('Home')
                        .showIcon(false)
                        .child(S.document().schemaType('home_page').documentId('home_page')),
                      S.listItem()
                        .title('Blog')
                        .showIcon(false)
                        .child(S.document().schemaType('blog_page').documentId('blog_page')),
                    ])
                ),
              S.documentTypeListItem('page').title('General'),
            ])
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
