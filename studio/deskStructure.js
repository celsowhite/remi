import {CogIcon} from '@sanity/icons'

export const structure = (S) => {
  return S.list()
    .title('Base')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.listItem()
        .title('Settings')
        .id('site_settings')
        .icon(CogIcon)
        .child(S.document().schemaType('site_settings').documentId('site_settings')),
    ])
}
