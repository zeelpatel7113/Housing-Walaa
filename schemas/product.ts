export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'contact',
      title: 'Contact Number',
      type: 'string',
      validation: (Rule: any) => Rule.regex(/^[0-9]{10}$/).error('Please enter a valid 10-digit phone number')
    }
  ]
}