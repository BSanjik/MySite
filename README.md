# 🌐 BSanjik - Professional Website Template

Modern, responsive website template for web development services, focused on migrating sites from page builders like Tilda to custom solutions.

## ✨ Features

- **Modern Design**: Glassmorphism effects with smooth animations
- **Fully Responsive**: Perfect display on all devices
- **Contact Form**: Dual submission (EmailJS + Telegram)
- **SEO Optimized**: Complete meta tags, structured data, sitemap
- **Analytics Ready**: Google Analytics 4 + Yandex.Metrica integration
- **Performance**: Fast loading with optimized assets

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bsanjik-website.git
   cd bsanjik-website
   ```

2. **Configure your settings** (see Configuration section below)

3. **Deploy to your hosting**

## ⚙️ Configuration

### 📧 Email & Contact Form

Edit the `FORM_CONFIG` object in `index.html`:

```javascript
const FORM_CONFIG = {
  // EmailJS settings - Get from https://emailjs.com
  EMAILJS_SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
  EMAILJS_TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID', 
  EMAILJS_PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Telegram bot settings - Get from @BotFather
  TELEGRAM_ENABLED: true,
  TELEGRAM_BOT_TOKEN: 'YOUR_TELEGRAM_BOT_TOKEN',
  TELEGRAM_CHAT_ID: 'YOUR_TELEGRAM_CHAT_ID',
  
  // Your email for notifications
  RECIPIENT_EMAIL: 'your-email@example.com'
};
```

### 📊 Analytics

Replace placeholder IDs in `index.html`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<!-- Replace G-XXXXXXXXXX with your GA4 Measurement ID -->

<!-- Yandex.Metrica -->
ym(XXXXXXXX, "init", {
<!-- Replace XXXXXXXX with your Metrica counter ID -->
```

### 🌐 Social Media Links

Update social media URLs in the footer and JSON-LD sections:

```html
<!-- Footer social links -->
<a href="https://instagram.com/your_instagram">Instagram</a>
<a href="https://t.me/your_telegram">Telegram</a>
<a href="https://wa.me/+1234567890">WhatsApp</a>
```

### 🖼️ Images

Add your images to the `img/` folder:
- `favicon.ico` (32x32px)
- `logo.png` (200x60px)
- `og-image.jpg` (1200x630px)
- `apple-touch-icon.png` (180x180px)
- `favicon-32x32.png` & `favicon-16x16.png`

## 📁 File Structure

```
bsanjik-website/
├── img/                    # Images and icons
│   ├── favicon.ico
│   ├── logo.png
│   ├── og-image.jpg
│   └── ...
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── robots.txt              # SEO robots file
├── sitemap.xml             # XML sitemap
└── README.md               # This file
```

## 🛠️ Setup Instructions

### 1. EmailJS Configuration

1. Create account at [EmailJS](https://emailjs.com)
2. Create email service and template
3. Get Service ID, Template ID, and Public Key
4. Update `FORM_CONFIG` in `index.html`

### 2. Telegram Bot Setup

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Create new bot with `/newbot`
3. Get bot token
4. Get your Chat ID from [@userinfobot](https://t.me/userinfobot)
5. Update `FORM_CONFIG` in `index.html`

### 3. Analytics Setup

1. **Google Analytics 4**: Create property at [analytics.google.com](https://analytics.google.com)
2. **Yandex.Metrica**: Create counter at [metrica.yandex.ru](https://metrica.yandex.ru)
3. Replace placeholder IDs in `index.html`

### 4. SEO Setup

1. Update `sitemap.xml` with your domain
2. Update `robots.txt` with your domain
3. Add to Google Search Console
4. Add to Yandex.Webmaster

## 🎨 Customization

### Colors

Main color variables in `styles.css`:
- Primary: `#1e293b`
- Accent: `#3b82f6`
- Gradient: `#6366f1` to `#8b5cf6`

### Content

1. Update company name throughout `index.html`
2. Modify service descriptions and pricing
3. Replace testimonials with real customer feedback
4. Update portfolio/comparison section

## 📱 Responsive Design

The template includes responsive breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Technical Features

- **CSS Grid & Flexbox** for layouts
- **Intersection Observer API** for scroll animations
- **Fetch API** for form submissions
- **CSS Variables** for easy theming
- **Semantic HTML5** for accessibility
- **Progressive Enhancement** approach

## 📊 Performance

- Optimized images and assets
- Minimal external dependencies
- Efficient CSS and JavaScript
- Fast loading times (<2 seconds)

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit your changes
4. Push to the branch
5. Create Pull Request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check existing documentation
- Review configuration guides

## 🚀 Deployment

### Static Hosting (Recommended)
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

### Traditional Hosting
- Upload files to `public_html/`
- Ensure `.htaccess` is configured
- Test all functionality

---

**Made with ❤️ for modern web development**
