# COMP 4513 (Winter 2025) - Assignment 2
This repository contains the files for a Single-Page-Application Art Gallery!\
This project was developed as an assignment for COMP-4513: Advanced Web Development (Winter 2025) at Mount Royal University.

This Web App was built using **React** with **Vite** and **Tailwind**, and retrieves data from **Supabase**.

For demonstration purposes, the project is deployed through github-pages, and can be accessed here:\
https://ahill-mtroyal.github.io/COMP-4513-assign2-ahill389/

*Note: Supabase Databases 'sleep' while inactive, meaning the API may take extra time to respond on the initial request - or may not be functioning entirely in the future.*

### Page Views:

**Artists**: Displays a list of artists for the user to select from - once selected displays artist information and a list of paintings

**Galleries**: Displays a list of galleries for the user to select from - once selected displays gallery information and a list of paintings

**Genres**: Displays a list of genres for the user to select from - once selected displays genre information and a list of paintings

**Paintings**: Displays a list of all paintings contained in the database that the user can filter

**Favourites**: A modal view - All other views allow the user to mark 'favourite' items, which are then displayed in this view

**Painting Modal**: A modal view that displays a larger painting image along side painting details - appears when a painting thumnnail is clicked.

## Project Files:
| File | Description |
| ----- | ----- |
| artists/ | Contains components used to create the artist view
| gallery/ | Contains components used to create the gallery view
| genres/ | Contains components used to create the genre view
| painting/ | Contains components used to create the painting view, and painting lists
| modals/ | Contains components used to create modal pop-ups
| components/ | Along side the previously mentioned, contains modular components used across the project

## Planned Expansions:
- Login Authentication - While the project currently has a login screen, it is non-functional
- React Routing
- Responsive Design - Only large device screens are currently styled for