export default {
  type: 'document',
  name: 'category',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      type: 'string',
      name: 'image',
    },
  ],
}
