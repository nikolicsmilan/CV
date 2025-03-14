module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1400px", // Egyedi breakpoint 1200px
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px (alap szövegméret)
        xl: "1.125rem", // 18px
        "2xl": "1.25rem", // 20px
        "3xl": "1.5rem", // 24pxnch
        "4xl": "1.875rem", // 30px
        "5xl": "2.25rem", // 36px
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Használd a Tailwind beépített betűtípusait
        brush: ['Comforter Brush', 'cursive'],
      },
      colors: {
        primary: "#1E2A38", // Sötétkék főszín
        secondary: "#ECF0F1", // Világosszürke
        // accent: "#E67E22", // Narancssárga a CTA-hoz
        accent: "#D98E30",
        background: "#2C3E50", // Sötétebb árnyalat a háttérhez
        success: "#2ECC71", // Zöld hangsúlyszín
        text: "#BDC3C7", // Világosszürke a szövegekhez
      },
    },
  },
  plugins: [
  ],
};
