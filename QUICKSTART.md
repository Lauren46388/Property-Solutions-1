# Quick Start Guide - BuildPro Construction Website

## How to View Your Website

### Option 1: Direct Browser (Easiest)
1. Open **File Explorer**
2. Navigate to: `C:\Users\Mya Thompson\Property Solutions`
3. Double-click **index.html**
4. Your website will open in your default browser

### Option 2: Using VS Code
1. Right-click on **index.html** in VS Code
2. Select **Open with Live Server** (if you have the extension)
3. Website opens automatically

### Option 3: Drag & Drop
1. Drag **index.html** from File Explorer
2. Drop it into your web browser
3. Website loads instantly

---

## Website Structure

Your construction company website includes:

### 📱 **Navigation Bar**
- Sticky header with company logo
- Smooth navigation to all sections
- Mobile-responsive hamburger menu

### 🎯 **Hero Section**
- Eye-catching banner with gradient background
- Call-to-action button
- Professional headline and subheading

### 🛠️ **Services Section**
- 6 service categories (Residential, Commercial, Remodeling, etc.)
- Hover effects and icon display
- Service descriptions

### 🏗️ **Portfolio Section**
- Recent projects showcase
- 6 project examples with gradient backgrounds
- Hover zoom effects

### ℹ️ **About Section**
- Company information
- 4 stat boxes (Projects, Satisfaction, Years, Team)
- Company image placeholder

### 📞 **Contact Section**
- Contact information (phone, email, address, hours)
- Functional contact form
- Form validation and submission feedback

### 🔗 **Footer**
- Copyright information
- Social media links

---

## Customization Instructions

### Edit Company Information
1. Open **index.html** in a text editor (Notepad, VS Code, etc.)
2. Find and replace:
   - "BuildPro" → Your company name
   - "(555) 123-4567" → Your phone number
   - "info@buildpro.com" → Your email
   - "123 Construction Ave" → Your address
   - Service descriptions with your actual services

### Change Brand Colors
1. Open **styles.css** in a text editor
2. Find the `:root` section at the top
3. Modify these colors:
   ```css
   --primary-color: #2563eb;        /* Main blue - change this */
   --primary-dark: #1e40af;         /* Dark blue - change this */
   --secondary-color: #10b981;      /* Green accent - change this */
   ```

### Update Portfolio Images
1. In **index.html**, find the portfolio items section
2. Replace the gradient backgrounds with your project images
3. Update project titles and descriptions

### Test Contact Form
1. Open website in browser
2. Scroll to "Contact" section
3. Fill in the form and click "Send Message"
4. Currently shows a confirmation popup (you'll need backend to actually email)

---

## File Descriptions

| File | Purpose |
|------|---------|
| **index.html** | Main website structure and content |
| **styles.css** | All styling, colors, layout, and responsive design |
| **script.js** | Interactive features (navigation, form, animations) |
| **README.md** | Detailed documentation |
| **QUICKSTART.md** | This file |

---

## Browser Compatibility

✅ **Works on:**
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
- Mobile browsers (iPhone, Android)

---

## Deploy Your Website

When you're ready to share your website online:

### Free Options:
1. **Netlify** - Drag & drop files at netlify.com
2. **GitHub Pages** - Push files to GitHub
3. **Vercel** - Free hosting with automatic updates

### Paid Options:
1. **GoDaddy** - Domain + hosting
2. **Bluehost** - Easy WordPress hosting
3. **SiteGround** - Premium hosting
4. Any web hosting provider with cPanel

---

## What's Next?

### Easy Enhancements:
- ✏️ Update all company information
- 🎨 Change colors to match your brand
- 📸 Add your own project photos
- 📱 Test on mobile devices

### Advanced Features (requires coding):
- 💌 Set up email notifications on contact form
- 📊 Add Google Analytics
- 🔍 Improve SEO with schema markup
- 🖼️ Add image galleries/sliders
- ⭐ Add customer testimonials
- 👥 Add team member profiles

---

## Troubleshooting

**Website won't load?**
- Make sure you're opening the **index.html** file directly
- Try a different browser
- Check that all three files are in the same folder

**Styling looks broken?**
- Refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Make sure styles.css is in the same folder

**Form not working?**
- The form displays a confirmation message
- To actually send emails, you need a backend service
- Recommended: Formspree.io or Netlify Forms

---

## Contact & Support

For website building help:
- **HTML/CSS/JavaScript**: Mozilla Developer Network (developer.mozilla.org)
- **Hosting Questions**: Your hosting provider's support
- **Domain Setup**: Your domain registrar

---

**Ready to launch? Open index.html in your browser and start customizing!** 🚀
