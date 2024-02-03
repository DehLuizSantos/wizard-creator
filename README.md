# Next.js 14 Boilerplate 😀

This is a simple boilerplate for a Next.js 14 project with the following configurations:

-   TypeScript ✨
-   Jest for testing ✨
-   Tailwind CSS for styling ✨
-   Prettier for code formatting ✨
-   ESLint for linting ✨
-   Husky for Git hooks ✨
-   Lint-staged for running tasks on staged files ✨
-   Commitlint for linting commit messages ✨

## Getting Started 🚀

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation ☄️

-   Clone the repository:

```sh
git clone https://github.com/AdekeyeAdeniyi/Nextjs14-Boilerplate.git
```

-   Navigate to project directory

```bash
cd Nextjs14-Boilerplate
npm run prepare
```

-   Install package dependecies

```bash
npm run install
```

## Development 🏗️

Start the development server:

```bash
npm run dev
```

## Testing ⚙️

Run Jest tests:

```bash
npm run test
```

## Build 🧱

Build the production-ready application:

```bash
npm run build
```

## Linting and Formatting 📏

Lint and format the code:

```bash
npm run lint
npm run format
```

## Committing Changes 📃

Commitlint: This project uses Commitlint to enforce a conventional commit message format. The [Conventional Commits](https://www.conventionalcommits.org/) specification defines a standardized format for commit messages. Following this convention helps in generating meaningful changelogs automatically.

Here's a brief explanation of how Commitlint works in the context of this boilerplate:

Conventional Commit Format:

Commit messages should follow a specific format like `feat: add new feature` or `fix: resolve a bug.`
The [format](./commitlint.config.js) typically includes a type (e.g., feat, fix, chore) and a description.
How to Commit:

When making a commit, developers are encouraged to follow the conventional commit format.

```bash
git commit -m "<format>: <message description>"
```

## License 📌

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
