# Elite Hub

This is the new and revamped version of Elite Hub that is being made from scratch, this document was made to be a sort of guide to explain the structure and design of this project so new developers quickly can get it up and running.

##### Libraries used
* Vite - framework used to quickly speed up the process of React development.
* Chadcn *(pog name)* - React components that are based on Tailwind and uses the CLI to add new components so you don't have a large code base.
* Zustand - for easy and global state management with increased speed.

##### File structure
The project might seem a bit messy but I decided to split up the code base into smaller chunks so there are not as much code in one place and thus hopefully make it a bit more easy to work with and to find where issues might occur.

```
src -- This is the root directory where all the code lives.
 ┣ assets -- Here you can add assets such as images, videos etc.
 ┣ components -- Folder for all the UI related stuff.
 ┃ ┣ Pages -- Root folder for the 'pages'
 ┃ ┃ ┣ 404 -- The 404 page
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ news -- The news page
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ shop -- The shop page
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ storage -- The storage page
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ pages.tsx -- Holds the side bar buttons for pages
 ┃ ┃ ┗ page_container.tsx -- Logic for handling page switching
 ┃ ┣ Profile -- Folder for the avatar component
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ profile.tsx -- The avatar component
 ┃ ┣ SideMenu -- Folder for the entire sidebar
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ sidemenu.tsx -- Contains the styling for the sidebar
 ┃ ┣ Tablet -- The folder for the tablet UI
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ tablet_ui.tsx -- Contains the styling of the tablet
 ┃ ┗ ui -- Stock Shadcn components
 ┃ ┃ ┣ avatar.tsx
 ┃ ┃ ┣ button.tsx
 ┃ ┃ ┣ card.tsx
 ┃ ┃ ┣ pagination.tsx
 ┃ ┃ ┣ separator.tsx
 ┃ ┃ ┗ switch.tsx
 ┣ lib -- Contains lib for theme switching, state management etc.
 ┃ ┣ theme-provider.tsx
 ┃ ┣ utils.ts
 ┃ ┗ zustand.ts
 ┣ App.tsx -- The main component for rendering the tablet and sidebar
 ┣ global.css
 ┣ main.tsx -- Default React 'root' section.
 ┗ vite-env.d.ts
```

The naming of each folder and file might not be the best and most clear but I plan to improve it in the future, currently this is just a mockup that is work in progress and once I'm happy with the design I will strip down the hardcoded parts and replace it with data from the actual server and external API.

##### Requirements

You will need the following:
* Node JS
* Yarn

Once all those are installed, simply run:
* yarn install
* yarn run dev