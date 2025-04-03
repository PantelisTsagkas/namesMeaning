# Team Name Meanings

A simple, elegant React application that displays the meanings and origins of team members' names. Built with React, TypeScript, and Tailwind CSS.

![image](https://github.com/user-attachments/assets/a5b845cc-d253-477e-a702-b0b702a2a599)


## Features

- **Name Cards**: Beautifully designed cards displaying team members' names
- **Search Functionality**: Filter names by either name or country of origin
- **Detailed View**: Click on any card to see the detailed meaning of the name
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite as the build tool

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/team-name-meanings.git
   cd team-name-meanings
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173/
   ```

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## Customization

### Adding New Names

To add new team members, edit the `namesList` array in `src/App.tsx`:

```typescript
const namesList: NameMeaning[] = [
  { 
    name: "New Team Member",
    origin: "Country",
    meaning: "The meaning of the name"
  },
  // ... existing names
];
```

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the classes in the JSX elements
2. Updating the gradient colors in the main container
3. Changing the card and modal designs

## Project Structure

```
team-name-meanings/
├── public/
├── src/
│   ├── App.tsx         # Main application component
│   ├── index.css       # Tailwind imports and custom animations
│   ├── main.tsx        # Entry point
│   └── vite-env.d.ts   # TypeScript declarations for Vite
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Created with ❤️ by Pantelis
