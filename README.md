# 🎬 DaddyM Films - Content Studio

The official content management system for **[DaddyM Films](https://daddymfilms.com)** - Rwanda's #1 destination for Kinyarwanda translated movies. Built with Sanity CMS to manage an extensive library of movies, TV seasons, and translator profiles for the leading Rwandan film translation platform.

[![Deploy Sanity Studio](https://github.com/aimelive/studio-daddym-films/actions/workflows/deploy-sanity.yml/badge.svg)](https://github.com/aimelive/studio-daddym-films/actions/workflows/deploy-sanity.yml)
![Sanity Studio](https://img.shields.io/badge/Sanity-Studio-red?style=flat-square&logo=sanity)
![React](https://img.shields.io/badge/React-19.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-UNLICENSED-yellow?style=flat-square)

## ✨ Features

### 🎥 Movie Management

- **Content Types**: Support for both Movies and TV Seasons
- **Rich Media**: Image uploads with automatic optimization
- **Categorization**: Pre-defined categories with custom icons (Action, Drama, Horror, Romantic, Indian, Others)
- **SEO-Friendly**: Auto-generated slugs for better URL structure
- **Multi-Link Support**: Multiple streaming and download links per movie
- **Trailer Integration**: YouTube URL validation and direct video file support
- **Translator Association**: Link movies to translators/dubbing artists
- **Custom Structure**: Organized navigation with category-based movie browsing

### 👥 Kinyarwanda Translator Management

- **Profile Management**: Complete profiles for Kinyarwanda translators and voice actors
- **Biography & Credits**: Detailed background and translation portfolio
- **Image Gallery**: Professional headshots and promotional images
- **Content Association**: Track which movies each translator has dubbed into Kinyarwanda
- **SEO-Optimized**: Auto-generated slugs for translator profiles

### 📋 Watchlist Management

- **Custom Collections**: Create curated movie collections and watchlists
- **Movie References**: Link multiple movies to themed collections
- **Content Curation**: Organize movies by themes, genres, or special collections
- **Dynamic Lists**: Flexible watchlist system for featured content and recommendations

### 🛠️ Technical Features

- **Real-time Editing**: Live preview and collaborative editing
- **Custom Validation**: Smart URL validation for trailers and streaming links
- **Custom Studio Structure**: Organized navigation with category-based browsing and custom icons
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **GraphQL API**: Built-in GraphQL endpoint for frontend integration
- **Version Control**: Built-in document versioning and history
- **Structured Content**: Reference-based relationships between movies, translators, and watchlists

## 🚀 Tech Stack

- **CMS**: Sanity Studio v4.10.2
- **Frontend**: React 19.1 with TypeScript
- **Styling**: Styled Components 6.1.18
- **Icons**: Lucide React (modern icon library)
- **Development**: ESLint + Prettier for code quality
- **Build Tools**: Sanity CLI with hot reload

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- A Sanity account ([sign up for free](https://www.sanity.io/))

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/aimelive/studio-daddym-films.git
   cd studio-daddym-films
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Login to Sanity (if not already logged in)**

   ```bash
   npm run login
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3333` to access the Sanity Studio

## 📖 Usage Guide

### Adding a New Movie

1. Navigate to the Studio dashboard
2. Click "Create" → "Movie"
3. Fill in the required fields:
   - **Type**: Choose between "Movie" or "Season"
   - **Title**: The movie/season title
   - **Description**: Brief synopsis or description
   - **Image**: Upload a poster or promotional image
   - **Category**: Select from available categories
   - **Translator**: (Optional) Link to a translator profile
   - **Trailer URL**: YouTube link or direct video file URL
   - **Movie Links**: Add streaming and download links

### Managing Kinyarwanda Translators

1. Click "Create" → "Translator"
2. Complete the translator profile:
   - **Name**: Full name of the Kinyarwanda translator/voice actor
   - **Biography**: Professional background, experience, and translation specialties
   - **Image**: Professional headshot or promotional photo
   - **Slug**: Auto-generated URL-friendly identifier (optional customization)

### Managing Watchlists

1. Navigate to "Watchlists" in the studio sidebar
2. Click "Create" → "Watchlist"
3. Set up your watchlist:
   - **Title**: Name your collection (e.g., "Staff Picks", "New Releases", "Action Heroes")
   - **Movies**: Select and reference movies to include in this watchlist
4. Use watchlists for:
   - Featured movie collections
   - Themed movie groups
   - Seasonal recommendations
   - Curated content for different audiences

### Content Categories

The system supports the following movie categories:

- 🎬 **Action**: High-energy films with stunts and action sequences
- 💖 **Drama**: Character-driven narratives and emotional stories
- 👻 **Horror**: Scary movies and thriller content
- ⭐ **Romantic**: Love stories and romantic comedies
- 🌍 **Indian**: Bollywood and regional Indian cinema
- 📂 **Others**: Miscellaneous genres and uncategorized content

## 🔧 Development

### Available Scripts

| Script                   | Description                              |
| ------------------------ | ---------------------------------------- |
| `npm run dev`            | Start development server with hot reload |
| `npm run start`          | Start production server                  |
| `npm run build`          | Build the studio for production          |
| `npm run deploy`         | Deploy the studio to Sanity hosting      |
| `npm run deploy-graphql` | Deploy GraphQL API                       |
| `npm run projects`       | List all your Sanity projects            |
| `npm run login`          | Login to your Sanity account             |
| `npm run logout`         | Logout from Sanity                       |

### Code Quality

This project uses ESLint and Prettier for maintaining code quality:

```bash
# Format code
npx prettier --write .

# Lint code
npx eslint .
```

### Configuration

**Prettier Settings:**

- No semicolons
- Single quotes
- 100 character line width
- No bracket spacing

## 📁 Project Structure

```
studio-daddym-films/
├── schemaTypes/           # Sanity schema definitions
│   ├── index.ts          # Schema export file
│   ├── movie.ts          # Movie content type
│   ├── translator.ts     # Translator content type
│   └── watchlist.ts      # Watchlist content type
├── utils/                # Utility functions and constants
│   └── constants.ts      # Category definitions and icons
├── static/               # Static assets
├── dist/                 # Build output
├── structure.ts          # Custom studio structure configuration
├── sanity.config.ts      # Main Sanity configuration
├── sanity.cli.ts         # CLI configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Deployment

### Deploy to Sanity Hosting (Recommended)

```bash
npm run deploy
```

Your studio will be available at `https://your-project.sanity.studio/`

### Deploy GraphQL API

```bash
npm run deploy-graphql
```

API will be available at `https://your-project-id.api.sanity.io/v2023-05-03/graphql/production/default`

### Self-Hosting

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your preferred hosting service (Vercel, Netlify, etc.)

## 🔗 Integration

### Accessing Your Content

Once deployed, you can access your content via:

- **REST API**: `https://your-project-id.api.sanity.io/v2023-05-03/data/query/production`
- **GraphQL API**: `https://your-project-id.api.sanity.io/v2023-05-03/graphql/production/default`
- **CDN Images**: Automatic image optimization and CDN delivery

### Example Queries (GROQ)

```javascript
// Fetch all movies with translator info
const movies = await sanityClient.fetch(`
  *[_type == "movie"] {
    title,
    description,
    "imageUrl": image.asset->url,
    category,
    type,
    trailer,
    movieLinks,
    translator->{
      name,
      biography,
      "imageUrl": image.asset->url
    }
  }
`)

// Fetch all watchlists with their movies
const watchlists = await sanityClient.fetch(`
  *[_type == "watchlist"] {
    title,
    movies[]->{
      title,
      description,
      "imageUrl": image.asset->url,
      category,
      type
    }
  }
`)

// Fetch movies by category
const actionMovies = await sanityClient.fetch(`
  *[_type == "movie" && category == "ACTION"] {
    title,
    description,
    "imageUrl": image.asset->url,
    translator->{name}
  }
`)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and formatting
- Add appropriate validation rules for new fields
- Update this README if you add new features
- Test your changes thoroughly before submitting

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Styled Components](https://styled-components.com/)

## 🆘 Support

- [Sanity Community](https://www.sanity.io/community)
- [Sanity Help Center](https://www.sanity.io/help)
- [GitHub Issues](https://github.com/aimelive/studio-daddym-films/issues)

## 📄 License

This project is licensed under UNLICENSED - see the package.json file for details.

---

Made with ❤️ for **[DaddyM Films](https://daddymfilms.com)** and the Rwandan film community. Bringing Hollywood to Rwanda, one translation at a time! 🇷🇼🎬✨
