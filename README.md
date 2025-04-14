# XM Cloud Starter Kit (Next JS)

## QUICK START - Frontend (Connected Mode)

1. Install the dependencies:

   ```ps1
   npm install
   ```

2. Clone you `.\apps\demo\.env.example` file to `.\apps\demo\.env` and update the values as needed.

3. Start the development environment:

   ```ps1
   npm run dev
   ```

## QUICK START - Backend (Disconnected with Docker)

1. In an ADMIN terminal:

   ```ps1
   .\init.ps1 -InitEnv -LicenseXmlPath "C:\path\to\license.xml" -AdminPassword "DesiredAdminPassword"
   ```

2. Restart your terminal and run:

   ```ps1
   .\up.ps1
   ```

---

## About this Solution

This solution is a modification from Sitecore's XM Cloud Foundation Head template repo. It includes a base set of components for building an XM Cloud site and has been modified to use a monorepo-type architecture using TurboRepo. Because of some limitations within Docker, Docker has been modified to target a single app (`/apps/demo`).

Components live in the `/apps/demo/src/components` folder. Components outside of the `/app/demo/src/components/ui` directory that do not contain the following fragments in the file name will be included in the componentBuilder file generation:

- `index`
- `.dev`
- `.d`
- `.base`
- `.stories`
- `.props`
- `.types`
- `.type`
- `.mock`
- `.mocks`
- `.test`
- `.query`
- `.constants`
- `.enum`
- `.context`
- `.util`
- `.string`
- `.styles`
- `.dictionary`
- `.render`
- `.init`

## Setting Up Site in Vercel

1. Log in to Vercel.
2. Select the appropriate Team and click 'Create Project'.
3. Click Import on the 'XM-Cloud-Accelerator' repository from the 'Import Git Repository' list.
4. Update Project Name field, Add the following Environment Variables: SITECORE_EDGE_CONTEXT_ID, SITECORE_SITE_NAME, SITE_THEME and click 'Deploy' (this may fail).
5. Go back to the new project Settings page. Under Root Directory heading, ensure 'Include files outside the root directory in the Build Step.' is Enabled.
6. Under Deployment Protection, Disable Vercel Authentication.
7. Go to Deployments tab, and redeploy last deployment (if it failed).

# Development

## Frontend IDE Setup

This section outlines the recommended setup for our frontend development environment in Visual Studio Code (VSCode). These settings and extensions ensure consistency, improve code quality, and enhance the developer experience.

### Required Extensions

#### 1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Why?** Enforces consistent coding standards and helps catch errors early by integrating linting directly into VSCode.

#### 2. [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)

**Why?** Provides the latest TypeScript and JavaScript language features, ensuring compatibility with modern development workflows.

#### 3. [Shadcn Color Preview](https://marketplace.visualstudio.com/items?itemName=dexxiez.shadcn-color-preview)

**Why?** Improves the readability of `hsl()` colors in Tailwind CSS, making color selection more human-friendly.

#### 4. [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

**Why?** Lints and enforces best practices in CSS and other styling languages, reducing inconsistencies and potential errors.

#### 5. [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

**Why?** Enhances Tailwind CSS development by providing class name autocompletion, syntax highlighting, and linting.

### Prettier Configuration

We **do not** require a Prettier extension. Prettier is included as part of our ESLint configuration. If you have the Prettier extension installed, **please disable it** to avoid conflicts with ESLint's formatting rules.

### VSCode Settings

The following VSCode settings ensure a smooth development experience:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit",
    "editor.action.formatDocument": "explicit"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always"
}
```

#### Explanation:

- **`editor.formatOnSave: false`** → Disables format-on-save to prevent conflicts with ESLint and Stylelint.
- **`editor.codeActionsOnSave`**:
  - **`source.fixAll.eslint: explicit`** → Ensures ESLint automatically fixes issues on save.
  - **`source.fixAll.stylelint: explicit`** → Ensures Stylelint automatically fixes style issues on save.
  - **`editor.action.formatDocument: explicit`** → Ensures that formatting is controlled explicitly via ESLint.
- **`typescript.updateImportsOnFileMove.enabled: always`** & **`javascript.updateImportsOnFileMove.enabled: always`** → Automatically updates import paths when files are moved.

Following this setup ensures a consistent, efficient, and modern frontend development experience.

## Using Jira scaffolding tool
How to create a Jira API token:
- Go to the [Atlassian account management page](https://id.atlassian.com/manage-profile/security/api-tokens).
- Log in with your Atlassian credentials.
- Click "Create API token".
- Give your token a descriptive name.
- Select "Create" and copy the generated token.
- copy API token and add it to `apps/demo/.env.local` as shown below.

```
JIRA_EMAIL=<Your Email>
JIRA_API_TOKEN=<Your API Token>
JIRA_DOMAIN=<your-domain.atlassian.net>
```

- If you do not do this step you will be prompted to enter the information later.
- now you can run `npm run jira-component <jira ticket number or url> <component name>` from the project root.

