export default {
  type: 'document',
  name: 'order',
  fields: [
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'address',
      type: 'string',
    },
    {
      type: 'number',
      name: 'amount',
    },
  ],
}
