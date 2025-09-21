# FabTech - Medical Equipment & Pharmaceuticals Website

A comprehensive ReactJS website for FabTech, a leading provider of medical equipment and pharmaceutical products with full compliance and regulatory adherence.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, Vite, and modern JavaScript
- **Responsive Design**: Fully responsive design using TailwindCSS
- **Firebase Integration**: Real-time database for product management
- **Admin Dashboard**: Complete CRUD operations for product management
- **Smooth Animations**: Framer Motion animations throughout the site
- **Multi-page Navigation**: React Router for seamless navigation
- **Compliance Focus**: Dedicated sections for regulatory compliance
- **Contact Forms**: Interactive contact forms with validation

## 🎨 Design System

The website uses a carefully crafted color palette:
- **Teal Prime**: #00897B (Primary brand color)
- **Light Teal**: #80CBC4 (Secondary/accent)
- **Orange**: #FF7043 (Call-to-action buttons)
- **Blue**: #4467A3 (Information elements)
- **Light Gray**: #FAFAFA (Background)

## 📁 Project Structure

```
FabTech/
├── public/
├── src/
│   ├── components/
│   │   ├── SplashScreen.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Compliance.jsx
│   │   ├── Clients.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Admin.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── services/
│   │   └── productService.js
│   ├── config/
│   │   └── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FabTech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your Firebase project credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔥 Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Enable Authentication (Email/Password)
4. Copy your project configuration to the `.env` file
5. Set up Firestore security rules for your needs

### Firestore Collections

The application uses the following Firestore collections:
- `products`: Stores all product information with CRUD operations

## 👨‍💼 Admin Access

The admin dashboard allows authorized users to manage products with full CRUD operations.

**Default Admin Credentials:**
- Email: admin@fabtech.com
- Password: admin123

**Admin Features:**
- Add new products
- Edit existing products
- Delete products
- View all products in a table format
- JSON-based specifications management

## 📱 Pages Overview

### 1. **Splash Screen**
- Company logo animation
- Loading indicator
- Smooth transition to main site

### 2. **Home Page**
- Hero section with company introduction
- Product categories (Sysmax-Biosystems, Rest Inc.)
- Features showcase
- Partner brands
- Call-to-action sections

### 3. **About Page**
- Company history and founding information
- Mission and vision statements
- Team profiles
- Certifications and compliance info
- Company timeline

### 4. **Products Page**
- Filterable product catalog
- Search functionality
- Category and brand filters
- Product detail modals
- Stock status indicators

### 5. **Compliance Page**
- Regulatory certifications
- Quality assurance processes
- Supply chain transparency
- Downloadable documentation

### 6. **Clients Page**
- Major healthcare clients showcase
- Client testimonials
- Partner brand relationships
- Success stories

### 7. **FAQ Page**
- Categorized frequently asked questions
- Expandable/collapsible sections
- Contact information for additional support

### 8. **Contact Page**
- Contact form with validation
- Multiple contact methods
- Department-specific contacts
- Location information
- Emergency contact details

### 9. **Admin Dashboard**
- Secure login system
- Product management interface
- CRUD operations for products
- Real-time data synchronization

## 🎯 Key Features

### Product Management
- **Dynamic Product Catalog**: Products are stored in Firebase and can be managed through the admin interface
- **Advanced Filtering**: Filter by category, brand, and search terms
- **Detailed Product Views**: Modal windows with complete product specifications
- **Stock Management**: Track inventory levels and availability

### Compliance & Quality
- **Regulatory Focus**: Dedicated compliance section with certifications
- **Documentation**: Downloadable compliance documents
- **Supply Chain Transparency**: Detailed information about sourcing and quality control

### User Experience
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion animations enhance user experience
- **Fast Loading**: Optimized with Vite for quick load times
- **Accessibility**: Built with accessibility best practices

## 🔧 Technologies Used

- **Frontend**: React 18, Vite, TailwindCSS
- **Backend**: Firebase (Firestore, Authentication)
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Styling**: TailwindCSS with custom configuration

## 📦 Dependencies

### Main Dependencies
- `react` & `react-dom`: Core React libraries
- `react-router-dom`: Client-side routing
- `firebase`: Backend services
- `framer-motion`: Animation library
- `react-icons`: Icon library
- `react-hook-form`: Form handling

### Development Dependencies
- `@vitejs/plugin-react`: Vite React plugin
- `tailwindcss`: Utility-first CSS framework
- `autoprefixer` & `postcss`: CSS processing
- `eslint`: Code linting

## 🚀 Deployment

The project is configured for easy deployment to various platforms:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Netlify
   - Vercel
   - Firebase Hosting
   - AWS S3
   - Any static hosting service

## 🔒 Security Considerations

- Environment variables are used for sensitive Firebase configuration
- Admin authentication is required for product management
- Firestore security rules should be configured based on your requirements
- Input validation is implemented on all forms

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  'teal-prime': '#00897B',
  'light-teal': '#80CBC4',
  'orange': '#FF7043',
  'blue': '#4467A3',
  'light-gray': '#FAFAFA',
}
```

### Content
- Update company information in the respective page components
- Modify product categories and sample data in `productService.js`
- Customize contact information in the Contact page

## 📞 Support

For questions or support regarding this project:
- Email: support@fabtech.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary software developed for FabTech. All rights reserved.

---

**Built with ❤️ for healthcare professionals worldwide**
