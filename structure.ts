import {StructureBuilder} from 'sanity/structure'
import {CATEGORIES} from './utils/constants'
import {ListIcon, MonitorPlayIcon, User2Icon} from 'lucide-react'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Movies')
        .icon(MonitorPlayIcon)
        .child(
          S.list()
            .title('Categories')
            .items(
              CATEGORIES.map((category) =>
                S.listItem()
                  .title(category.title)
                  .icon(category.icon)
                  .child(
                    S.documentList()
                      .title(`${category.title} Movies`)
                      .filter('_type == "movie" && category == $category')
                      .params({category: category.value})
                      .defaultOrdering([{field: '_createdAt', direction: 'desc'}]),
                  ),
              ),
            ),
        ),

      // Divider
      S.divider(),

      // Other document types
      S.listItem()
        .title('Translators')
        .icon(User2Icon)
        .child(
          S.documentList()
            .title('Translators')
            .filter('_type == "translator"')
            .defaultOrdering([{field: 'name', direction: 'asc'}]),
        ),

      S.listItem()
        .title('Watchlists')
        .icon(ListIcon)
        .child(
          S.documentList()
            .title('Watchlists')
            .filter('_type == "watchlist"')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}]),
        ),
    ])
