import {CogIcon, ControlsIcon, EarthGlobeIcon} from '@sanity/icons'

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
                        .title('Blog')
                        .showIcon(false)
                        .child(S.document().schemaType('blog_page').documentId('blog_page')),
                    ])
                ),
              S.documentTypeListItem('page').title('General'),
            ])
        ),
      S.documentTypeListItem('post').title('Posts'),
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
                .icon(ControlsIcon)
                .child(S.document().schemaType('general_settings').documentId('general_settings')),
              S.listItem()
                .title('Social')
                .icon(ControlsIcon)
                .child(S.document().schemaType('social_settings').documentId('social_settings')),
            ])
        ),
    ])
}
