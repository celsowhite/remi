export const structure = (S) => {
  return S.list()
    .title('Base')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('site_settings').documentId('site_settings')),
    ])
}
