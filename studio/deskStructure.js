import {CogIcon, ControlsIcon, EarthGlobeIcon} from '@sanity/icons'

export const structure = (S) => {
  return S.list()
    .title('Base')
    .items([
      S.documentTypeListItem('page').title('Pages'),
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
                .icon(EarthGlobeIcon)
                .child(S.document().schemaType('social_settings').documentId('social_settings')),
            ])
        ),
    ])
}
