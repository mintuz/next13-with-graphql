This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Then run the following command to generate the GraphQL Typescript Types.

```bash
yarn generate:schema
```

## Libraries Used

1. [graphql-yoga](https://the-guild.dev/graphql/yoga-server)
2. [urql](https://formidable.com/open-source/urql/)
3. [@graphql-codegen/cli](https://www.the-guild.dev/graphql/codegen/docs/getting-started/installation)

## Frontend

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## GraphQL

To view the GraphiQL UI visit [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)

The GraphQL server related code is located within `./server/`
