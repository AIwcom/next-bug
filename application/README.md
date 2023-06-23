## Getting Started

First, install deps:

```bash
yarn install 
```

Developing and production build:

```bash
yarn dev # development server with hot reloading
yarn build # create production build 
yarn start # run production build from prior command
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

## Code quality

There is unit testing with jest and enzyme. Run them with `yarn test` or while developing with `yarn test:watch`. The
watch mode only runs for changed files (git state), if you want all files to be tested, you can press **a** in
interactive view, or call `jest --watchAll` yourself.

For linting and formating, there is eslint, stylelint and prettier. These will run as pretest skript when
calling `yarn test`. Also testing is enforced for a build as `prebuild`.
If you want to call the linters standalone, the commands are:

```bash
yarn stylelint
yarn eslint
yarn prettier
yarn format # all of the three above after each other
```

There is a pre-push hook which does `yarn test` (including formatting). If you want this to be skipped, you can
call `git push --no-verify`, but be sure to use this rarly.
