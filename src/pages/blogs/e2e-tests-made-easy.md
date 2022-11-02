---
layout: ../../layouts/BlogLayout.astro
title: '🧪 E2E tests made easy with Cypress + Cucumber'
cover: '/assets/blogs/e2e-blog-cover.png'
author: 'Takshak Ramteke'
date: '1-July-2022'
backLink: '/blogs'
---

If you're a developer I'm pretty sure end to end testing is something you've heard about a lot

While it may “sound” like daunting task at first what if i tell you that there is a relatively easy way to implement it…

```gherkin
Feature : Test redirection

Scenario : Test the redirect
  Given that im on "Home" page
  When i click "#redirect"
  Then i should see "Redirected" as "h1"
```

What you read just now is a fully functional test written in what is called a [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax used by Cucumber which is a BDD testing tool and its open source ofcourse

But Cucumber on it's own isn't really capable of doing E2E tests And That's where Cypress comes in to save the day

Now, that's fine and all but

### How exactly do we do it you may ask

Well apparantly its quite the simple process thanks to the magic✨ that's open source and the hardwork of [badeball](https://github.com/badeball/cypress-cucumber-preprocessor) \*\*who created the

_[cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)_ 🔥 which if you couldn’t guess already allows us to use cucumber along side cypress

now as you might expect (almost) nothing in the tech industry works without a bit of configuration and this tool is no exception, though the good thing is that it is pretty simple to configure and as a matter of fact it can be done in 3 super easy steps

**Step 1 :** Install all the dependencies

ofcoure 🤷 duh we’d have to do this one & it’s kinda self explanatory, you only need to install a few things i.e `cypress`, `@badeball/cypress-cucumber-preprocessor`, `esbuild` and lastly `cypress-esbuild-preprocessor`

To do so simply run the following command and watch it complete

`yarn add --dev cypress @badeball/cypress-cucumber-preprocessor esbuild cypress-esbuild-preprocessor typescript`

OR

`npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor esbuild cypress-esbuild-preprocessor typescript` if that’s your thing

now you can throw in Typescript (💜) into this if you want to which I obviously did, but it’s totally optional & upto you

**Step 2 :** Generating the basic configuration

Now that we have all what we need let’s start the actual configuration but here’s the plot twist,

Initially though you will not have the basic cypress configuration, to generate it simply run

`yarn cypress open` or `npx cypress open` if npm’s your thing

And follow the dialogs to configure the e2e testing and that should give you a basic configuration that we need

**Step 3 :** The Actual Configuration

Okay this time for sure

Now that we have all the basic configuration we need lets start by telling cypress to use the .feature files (that’s the extension for a test written with cucumber), To do that all we need to do is specify the “specPattern” property in the _cypress.config.ts_ (or .js if youre using js)

```tsx
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //
    },
    specPattern: '**/*.feature',
  },
});
```

Now that that’s out of the way lets focus on the other part which is actually using the preprocessor to do that we’ll have to use a bundler to process these _.feature_ files, there are many bundlers out there so you can use any bundler you want to, I personally prefer using esbuild because it is fast and easy to configure

And so to do this all we have to do setup an _on()_ event handler and configure our cypress-cucumber-preprocessor plugin and the bundler inside of the _setupNodeEvents_ function that allows us to tap into, modify, or extend the internal behavior of Cypress

```tsx
import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
	e2e:{
		setupNodeEvents(on, config){
			addCucumberPreprocessorPlugin(on, config);
			on("file:preprocessor",createBundler({
          plugins: [createEsbuildPlugin(config)],
        });
			)
		},
		specPattern: "**/*.feature",
	}
})
```

And That’s all we’re done with the configuration all that’s left is to take it for a spin and write some tests

### Writing your First Test

To write a test just add a _.feature_ file inside of the _“ cypress/e2e/ ”_ folder and creative a respective _spec_ file for it

**what is a spec file?** you may ask well its a file that tells cypress how to process the statements inside of the feature file, you’ll see what i mean in just a sec

So lets quickly write a feature file first

```gherkin
Feature: Google.com
  Scenario: visting the frontpage
    When I visit google.com
		Then I should see Google as the Title
```

And that’s it, all this test does is navigate to [google.com](http://google.com) and check whether the title for the website is google or not, simple as that 🙃

Now obviously you can do more complex stuff with this but for the sake of demo and simplicity let’s keep it to that for now

And let’s move on to writing the actual spec file for this test, to do that just create a file ending in .ts (or .js) with the same name as that of the feature file e.g. google.ts if you called it google.feature

```tsx
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit google.com', () => {
  cy.visit('<https://google.com>');
});
Then('I should see Google as the Title', () => {
  cy.get('title').should('Google');
});
```

Now to run this test just run `yarn cypress run` or `npx cypress run` and if you followed through correctly then you’ll see the test pass 😌

### Common Step Definitions

You don’t have to actually write a spec file for each _.feature_ file what you can do is use a common spec file and define all the reoccurring step definitions inside of it to do so add the following line inside of your _package.json_

```json
"cypress-cucumber-preprocessor": {
    "stepDefinitions": [
      "cypress/e2e/common/index.ts"
    ]
  }
```

and now you can define all the common step definitions inside of the index.ts and yes you can call this file whatever you want i call it index.ts because i kinda like it 🤷‍♂️

### Reusable Step definitions

YES, you read it right you can actually write reusable step definitions for the feature statements that you will probably use multiple times e.g.

```gherkin
Feature: Google.com
  Scenario: visting the frontpage
    When I visit "google.com"
		Then I should see "Google" as the "title"
```

Notice the double quotes on [google.com](http://google.com), Thats what we're going to use to make this statement reusable

The main part is tho happens in the spec file

```tsx
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(`I visit {string}`, (url: string) => {
  cy.visit(`https://${url}`);
});
Then(`I should see {string} as the {string}`, (text, target) => {
  cy.get(location).should('contain', text);
});
```

What we do here is take arguments from the feature statements inside the double quotes and then we use them as parameters in the callbacks

And thus, We can now use these two statements as many times as we want to by just changing the values inside the double quotes

And That is How you can make End to End Testing much more easy and Fun for beginners on your team

> Hello there 👋, Thank you for reading to the bottom, Hope you liked this blog and that it was Helpfull to you in some way or the other, This is the first blog post i ever wrote so please feel free to point out some short commings if you find any constructive criticism is always welcomed

Thank you for Reading, and I hope to see you on next one
