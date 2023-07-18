import {CogIcon, ControlsIcon, DocumentsIcon, EarthGlobeIcon} from '@sanity/icons'

export const structure = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(S.documentList().title('Pages').filter('_type in ["page", "homePage", "blogPage"]')),
      S.listItem()
        .title('Posts')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Posts')
            .items([
              S.documentTypeListItem('post').title('All Posts'),
              S.documentTypeListItem('postTag').title('Tags'),
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
                .child(S.document().schemaType('generalSettings').documentId('generalSettings')),
              S.listItem()
                .title('Header')
                .showIcon(false)
                .child(S.document().schemaType('headerSettings').documentId('headerSettings')),
              S.listItem()
                .title('Footer')
                .showIcon(false)
                .child(S.document().schemaType('footerSettings').documentId('footerSettings')),
              S.listItem()
                .title('Social')
                .showIcon(false)
                .child(S.document().schemaType('socialSettings').documentId('socialSettings')),
            ])
        ),
    ])
}
