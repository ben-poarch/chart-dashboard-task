## Chart Coding Task

I have built both components shown in the pdf, each located in ./App/charts and named Line.tsx and Pie.tsx.
For cleanliness of code I have created a 'database' as database.tsx to store objects full of data for these components.

## View via Vercel

View the published dashboard on Vercel here: https://chart-dashboard-task.vercel.app/

## Running the project locally

First of all, clone this repository.

Then ensure the following dependencies are installed:

```bash
# Next.js
npx create-next-app@latest

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Tremor (dashboard UI library used for charts)
npm install @tremor/react

# Tremor Tailwind dependencies
npm install @headlessui/react @headlessui/tailwindcss
npm install -D @tailwindcss/forms

# Faker (produces fake data for line chart)
npm install @faker-js/faker --save-dev
```

## Run the project Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
