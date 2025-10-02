import {ListIcon} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const watchlist = defineType({
  name: 'watchlist',
  title: 'Watchlist',
  type: 'document',
  icon: ListIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'movies',
      title: 'Movies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'movie'}]}],
      validation: (Rule) => Rule.required().error('At least one movie is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      movies: 'movies',
    },
  },
})
