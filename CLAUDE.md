# Pokebowl Website - Ontwikkel Richtlijnen

## 🎯 Belangrijke Regels (Check bij IEDERE wijziging!)

### 1. Mobile First Design 📱
**ALTIJD rekening houden met hoe het eruit ziet op telefoon versies.**
- Begin met mobile styling
- Voeg desktop features toe via `@media (min-width: ...)`
- Test eerst op mobiel, daarna op desktop

### 2. Kleurenschema 🎨
- **Primaire kleur:** `#ff6b3d` (oranje)
- **Secundaire kleur:** `#ff8f65` (lichte oranje)
- **Achtergrond:** `#ffffff` (wit)
- **Tekst:** `#333` (donkergrijs/zwart)

### 3. Performance ⚡
- Website moet **lightweight** blijven
- Minimale afbeeldingen gebruiken
- Focus op **CSS-based styling** (gradients, shadows, etc.)
- Lazy loading voor afbeeldingen waar mogelijk

## 📝 Code Conventies

### CSS
- Mobile-first media queries gebruiken
- Gebruik CSS variables voor kleuren (toekomstig)
- BEM naming convention overwegen voor nieuwe componenten

### React/TypeScript
- Functionele components met TypeScript
- Props interfaces definiëren
- React Router voor navigatie

## 🚀 Project Structuur
```
src/
├── components/     # Herbruikbare components (Header, Footer, etc.)
├── pages/         # Pagina components (Home, Menu, Contact, etc.)
└── assets/        # Afbeeldingen en andere assets
```

## ✅ Checklist voor nieuwe features
- [ ] Mobile responsive?
- [ ] Kleuren volgens schema?
- [ ] Performance impact minimaal?
- [ ] TypeScript types correct?
- [ ] Werkt op alle pagina's?
