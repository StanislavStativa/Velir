# Sitecore JSS Next.js Sample Application

[Documentation (Experience Platform)](https://doc.sitecore.com/xp/en/developers/hd/21/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

[Documentation (XM Cloud)](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

## Frontend Development

### Tech Stack

- XM Cloud (Headless CMS)
- Typescript
- NextJS
- Tailwind
- Radix UI/Themes

### Getting started

1. Install LTS version of node from https://nodejs.org/
2. You should be able to run the following command after the installation procedure below.

```
$ node --version
v18.19.1

$ npm --version
10.2.4
```

3. Run `npm install`

4. Run `npm run storybook` and navigate to http://localhost:6006/

### File Structure

Project focuses on two primary directories

```
- components
    - SXA
    - Velir
```

#### Components

Unlike previous SXA projects (CNH/Suncoast), components all live under src/components/Velir, where you will find the main frontend "UI/Feature" component, an optional "Base" component to be consumed by other components, stories, mock data, data/ui integrations, and any other component assets.

### Scaffolding

This project comes with a unique script that enables scaffolding a new JSS component using `npm run scaffold <ComponentName>`.

The default naming convention is that component names must start with a capital letter, and can contain
letters, number, underscores, or dashes.

If the <ComponentName> parameter includes a path, it must be relative to the src/components folder.
For example, `npm run scaffold search/SearchBox` will create a component called `SearchBox` in
`src/components/search/SearchBox.tsx`. Specifying a relative path is optional,
and just providing the name is ok.

This script generates the following files

- Generate Base and Feature component
- Generate Storybook file with mockdata
- Generate mock data file
- Generate props file
- Generate utils file

### Using Jira scaffolding tool
How to create a Jira API token:
- Go to the [Atlassian account management page](https://id.atlassian.com/manage-profile/security/api-tokens).
- Log in with your Atlassian credentials.
- Click "Create API token".
- Give your token a descriptive name.
- Select "Create" and copy the generated token.
- copy API token and add it to `apps/demo/.env.local` as shown below.

```
JIRA_EMAIL=<Your Velir Email>
JIRA_API_TOKEN=<Your API Token>
JIRA_DOMAIN=velir.atlassian.net
```

- If you do not do this step you will be prompted to enter the information later.
- now you can run `npm run jira-component <jira ticket number or url> <component name>` from the project root.

### Running connected:mode

To run the project locally against a running Sitecore instance, you can use `npm run start:connected`, which allows you to proxy an instance andd retrieve live data from Sitecore.

Ensure that you have your variables set up in your local environment file, for which values you can get through the XM Cloud Deploy App.
