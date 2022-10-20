# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
```dynamic component and lazy
if we only import true condition content don't want to import all then use Lazycomponentname 

Routing: with app.vue or without app.vue (need to rename the file name)
Note= if in project there is Page directory available then Nuxt check page directory and give 400 error if there is no vue file exists if there is no page directory then it will check app.vue file and start
app.vue is the entry point of the application
if there is no app.vue file in project then it will start from Page directory with current page.

Navigation:
<NuxtLink>


Dynamic Rout:
square brackets are dynamic eg [id]
eg: for iphone list create only single vue file with iphone-[name].vue, it will take dynamic value

Assets:

Nuxt uses two directories to handle assets like stylesheets, fonts or images.
1. The public/ directory content is served at the server root as-is.
2. The assets/ directory contains by convention every asset that you want the build tool (Vite or Webpack) to process.
-> install tailwindcss
-> create assets-css folder and create css file with tailwind.css and paste these lines in that file:
@tailwind base;
@tailwind components;
@tailwind utilities;
-> we can add file path in default page in layout but for other layout we need to add the same line again and again, for resolving it we have to add it nuxt.config.ts file
css:["assets/css/tailwind.css"],
-> add these code in nuxt.config.ts file
export default defineNuxtConfig({
    build: {
        postcss: {
          postcssOptions:{
              plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
          }
        },
      }
})

-> add content files in tailwind.config.js
 content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],


  Public Directory: 
  it is for public what ever inside the public dirctory no need to access it by full path just folder name inside public directory and then file name.One more reason for public directory we can add robots.txt file inside public and do SEO, robots.txt file is for SEO purpose 


  Head Management:
  useHead - to change page title or in iphone-[id] page rite code in Head section
<head>
    <Title>Nuxt 3 IPhone {{ name }}</Title>
</head>

 Composable:
 when we use front end application we need to reuse logic for common task.
for cart we use useCart in state.js file for adding values 

Data fetching:
fetch data using fetch, lazyfetch,fetchasync,lazyasynfetch

  Auth state:
login and logout with state useAuth in script.js composable


Middleware:
once we logout then not able to access the loged in page so we use middleware for that

There are three types
1. Anonymouse: default 
Inline middleware or default middleware code is only in particular page  
2. named
in named we have to create directory and file auth.js put the same code there so that we can use it many places
3. global
how many time pages are visited then we use global middleware
```

