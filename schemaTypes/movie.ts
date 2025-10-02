import {LinkIcon, MonitorPlayIcon} from 'lucide-react'
import {defineField, defineType} from 'sanity'
import {CATEGORIES} from '../utils/constants'

export const movie = defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon: MonitorPlayIcon,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Movie', 'Season'],
      },
      initialValue: 'Movie',
      validation: (Rule) => Rule.required().error('Type is required'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: CATEGORIES,
      },
      initialValue: 'OTHERS',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'translator',
      title: 'Translator',
      type: 'reference',
      to: [{type: 'translator'}],
    }),
    defineField({
      name: 'trailer',
      title: 'Trailer URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().custom(async (url) => {
          if (typeof url === 'undefined') return true

          // Check if it's a YouTube URL
          const youtubeRegex =
            /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(\?\S+)?$/
          if (youtubeRegex.test(url!)) {
            return true
          }

          // For non-YouTube URLs, check if it's a valid video link
          try {
            const response = await fetch(url!, {method: 'HEAD'})
            const contentType = response.headers.get('content-type')

            if (contentType && contentType.startsWith('video/')) {
              return true
            }

            // Also accept common video file extensions in URL
            const videoExtensions = /\.(mp4|avi|mov|wmv|flv|webm|mkv|m4v)(\?.*)?$/i
            if (videoExtensions.test(url!)) {
              return true
            }

            return 'URL must be a YouTube link or a valid video file'
          } catch (error) {
            return "Unable to validate video URL. Please ensure it's accessible."
          }
        }),
    }),
    defineField({
      name: 'movieLinks',
      title: 'Movie Links',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: LinkIcon,
          title: 'Link',
          fields: [
            defineField({
              name: 'streamingLink',
              title: 'Streaming Link',
              type: 'url',
              validation: (Rule) => Rule.required().error('Streaming link is required'),
            }),
            defineField({
              name: 'downloadLink',
              title: 'Download Link',
              type: 'url',
              validation: (Rule) => Rule.required().error('Download link is required'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one movie link is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'description',
    },
  },
})
