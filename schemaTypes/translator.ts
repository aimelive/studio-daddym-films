import {BookOpenIcon} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const translator = defineType({
  name: 'translator',
  title: 'Translator',
  type: 'document',
  icon: BookOpenIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required'),
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'text',
      validation: (Rule) => Rule.required().error('Biography is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'biography',
      media: 'image',
    },
  },
})
