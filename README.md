This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init
command to generate both `tailwind.config.js` and `postcss.config.js`.
`https://tailwindcss.com/docs/guides/nextjs`

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Install React Icon `npm add react-icons`

## Open/Close nav mobile menu

```bash
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

return (
    <div onClick={handleNav} className="md:hidden">
        <AiOutlineMenu size={25} />
    </div>
    {/* Side Drawer Menu */}
    <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
          }
        >
    <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
        <AiOutlineClose />
    </div>
)}

```

<<<<<<< HEAD
<<<<<<< HEAD
## Add Image optimisation
`npm add sharp`

=======
>>>>>>> add cars and foods pages
# Deploy app to Github Pages with CICD
```bash
git init
git add .
git commit -m "FirstDeploy"
git branch -M main
git remote add origin https://github.com/Eugene-Pavlovskiy/next-portfolio.git
git push -u origin main
```

## Make Pages on Github
In Pages/Build and deployment/Source choose GitHub Actions. Go to nextjs and commit



<<<<<<< HEAD
=======
>>>>>>> FirstDeploy
=======
>>>>>>> add cars and foods pages
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

```

```
