# Media INT - Intelligence Dashboard

A modern dark-themed media intelligence scraper dashboard with a blood red and black cyber-intelligence theme.

## Features

- 🎨 Cyber-intelligence themed UI with blood red (#B30000) and black (#000000) color scheme
- 📺 Dynamic video card rendering for YouTube content
- 🔴 Real-time monitoring of multiple channels
- 📱 Fully responsive design
- ✨ Smooth animations and glow effects
- 🔗 Ready for YouTube Data v3 API integration

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   The application will open at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
mediaMonitoring/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Main header with "Media INT" title
│   │   ├── Header.css
│   │   ├── VideoSection.js # Container for video groups
│   │   ├── VideoSection.css
│   │   ├── VideoCard.js    # Individual video display card
│   │   ├── VideoCard.css
│   │   ├── Channels.js     # Channel grid sidebar
│   │   └── Channels.css
│   ├── mockData.js         # Mock data for testing
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## YouTube Data v3 API Integration

The application is structured to easily integrate with YouTube Data v3 API. The mock data in `src/mockData.js` demonstrates the expected data structure:

```javascript
{
  id: unique_id,
  title: "Video Title",
  channel: "Channel Name",
  thumbnail: "thumbnail_url",
  link: "youtube_url",
  publishedTime: "time_string",
  date: "today" | "previous"
}
```

### Keywords for Scraping
The following keywords are configured for monitoring:
- BLA
- Hakkal
- terrorism
- herof
- herof2

## Color Theme

- **Background**: #000000 (Black)
- **Primary Red**: #B30000
- **Dark Red**: #8B0000
- **Borders**: #550000
- **Text**: #E0E0E0
- **Hover Glow**: #FF0000

## Features Implemented

✅ Modern cyber-intelligence themed header with glowing effect
✅ Responsive three-column layout (header, content, sidebar)
✅ Video cards with thumbnails, titles, channel info, and timestamps
✅ Hover effects with red glow
✅ Circular channel icons with grid layout
✅ Today/Previous video sections
✅ Clickable video links (open in new tab)
✅ Smooth animations and transitions
✅ Custom scrollbar styling
✅ Mobile-responsive design
✅ Orbitron font for cyber aesthetic

## Next Steps for Backend Integration

1. Set up YouTube Data v3 API credentials
2. Create API service module for fetching videos
3. Replace mock data with actual API calls
4. Add real-time scraping functionality
5. Implement data caching and storage
6. Add filtering and search capabilities

## Technologies Used

- React 18
- CSS3 (Flexbox & Grid)
- Google Fonts (Orbitron)
- YouTube Data v3 API (ready for integration)

---

**Note**: This is currently using placeholder data. Replace `mockData.js` with actual API calls to YouTube Data v3 API for production use.
