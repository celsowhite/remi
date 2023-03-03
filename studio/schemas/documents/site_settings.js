export default {
  title: 'Site Settings',
  name: 'site_settings',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Site URL',
      name: 'site_url',
      type: 'url',
    },
    {
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
    },
    {
      title: 'Twitter Handle',
      name: 'twitter_handle',
      type: 'string',
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
  ],
}
