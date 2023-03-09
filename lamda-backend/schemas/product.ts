export default {
  type: 'document',
  name: 'product',
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
      type: 'number',
      name: 'price',
    },
    {
      type: 'reference',
      name: 'category',
      to: [{type: 'category'}],
    },
    {
      type: 'array',
      name: 'images',
      of: [{type: 'string'}],
    },
    {
      type: 'text',
      name: 'description',
    },
  ],
}
