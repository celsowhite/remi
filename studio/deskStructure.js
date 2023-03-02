export const structure = (S) => {
  return S.list()
    .title('Base')
    .items([S.documentTypeListItem('page').title('Pages')])
}
