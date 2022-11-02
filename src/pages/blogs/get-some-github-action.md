---
layout: ../../layouts/BlogLayout.astro
title: '🗿 Get Some (Github) Actions'
cover: '/assets/blogs/get-some-github-action.png'
author: 'Takshak Ramteke'
date: '15-Aug-2022'
backLink: '/blogs'
---

**Github Actions**, If you haven't heard about already then please allow me tell you calling it amazing would be an understatement !

I personally think, It is one of those once in a decade things that endup having a super huge impact on the whole industry,

GitHub Actions is one of those things that just perfectly embodies rule 34(for devs), think anything of the top of your head and there's a high chance that there's a github action made for it already.

And Im not joking either, there's literally a github action for everything you may need e.g.

- [x] Deploying a next.js app to github pages,
- [x] making automatic releases,
- [x] greet a new contributor,
- [x] setting up entire dev enviornment,
      And much more !

And So today in this blog i'd like to ask you to come along with me on a little adventure, as we go through some stuff about github actions and dare i mention try creating one of our very own github action,

And if you hadn't already guessed by the big image, yes we'll be having ourselves some docker goodness as well, So without further ado, lets begin

# What is a Github Action ?

Well on the surface "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline."

But as you may guess there's more to it than that Github actions goes beyond just the realm of devops and allows us to run workflows in our repo when some or the other event occur

Now when talking about Github Actions, we should also talk about

# The Components of Github Actions

There are two componets to a github actions

1. an **Action**, which is the action itself and
2. a **Workflow**, which is a automated processes that _uses an action_

A workflow can contain one or more set of different actions which are run in their own seprate containers either in parallel or in the specified sequence

now since we've discussed the components of github actions, It's only fair to have a look at

# Types of Github Actions

As of now there are only two types of actions

1. **Container actions** : These are the actions that use a Dockerfile, These allow the enviornment to be packaged with github action code and can only be executed in github Hosted linux enviornments, needless to say this is the one we'll be looking at today.
2. **JavaScript actions** : Yet another implementation of JS, these type of actions decouple the github actions code from the enviornment allowing faster execution but accepting greater dependency management responsibility.

This was all just a small intro about Github actions, if you want to learn more about it in depth i recommend checking out the [docs](https://docs.github.com/en/actions)

Now That we have some background knowledge of what a Github action is, Let's start by setting up our first & very own github action

(spoiler alert it takes only 5 steps to do so)

ps. create a new empty repo before you start following along

# Step 1 : Adding a Dockerfile

In the newly created repo create a docker file with the following contents in it

```dockerfile
FROM debian:9.5-slim

ADD index.sh /index.sh
RUN chmod +x /index.sh
ENTRYPOINT ["/index.sh"]
```

A Dockerfile is like a blueprint to our container that is going to run our code for this action, i recommend you do this on a seprate branch from main

Here at line 1 we tell github that the base image for this pirticular action should be debian which is a linux distro then further ahead
We tell it to use the index.sh script as the entrypoint into our action

You might be wondering **why bash**, well the reason for that is
, We don't have any extra programs on debian image other than the essential linux programs (like seriously not even curl is intalled in there),

# Step 2 : Adding the entrypoint script

Now in the same directory as the dockerfile create a index.sh script with the contents you want to execute, I've just keet it simple for the sake of simplicity in this blog
please I encourage you to experiment with this yourself

```bash
#!/bin/bash

echo "message : $INPUT_MESSAGE"
```

If you can't tell already, all this line does is print out what ever the value of INPUT_MESSAGE is simple, we'll pass in this variable when we use this action inside of a workflow

# Step 3 : Adding some metadata for our action

To add this metadata we'll have to create a yaml file, this file act's as a sort of configuration file for our action. Also it's in here that we'll specify an input parameter in order to read `MESSAGE`

So go ahead and create a `action.yml` file in the same folder as the other two files, with the following content's in it :

```yml
name: 'get some github action'
description: 'An action to get some github action'
author: 'TakshakRamteke@users.noreply.github.com'

inputs:
  MESSAGE:
    description: 'Message to print out'
    required: true

runs:
  using: 'docker'
  image: 'Dockerfile'
```

While I personally think most of this is self explanatory, the super important things to look out for are the inputs and runs,

As you can probably tell in the inputs section we're setting up the `MESSAGE` variable that we used previously in our bash code, here you can define as many inputs as you want and you can also provide a default value for them if you want to

As for the `runs` section, this is where we define how this action is supposed to be run e.g. in this one we tell it to run using docker and use the Dockerfile to build our image

# Step 4 : Add a workflow

Now as we discussed earlier, in order to run a action we'll need to use it inside of a workflow

To do that we need to create a _yml_ file inside of the `.github/worlflows/` directory, So go ahead and create the aforementioned folder and inside of that create a `.yml` file and add the following content into it, (i called mine `getsome.yml` btw)

```yml
name: 'A workflow to get some github action'
on: push

jobs:
  builds:
    name: Get some github action
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: ./action
        with:
          MESSAGE: 'GOT SOME GITHUB ACTION 🏆'
```

Here, the first line is just the name that we want to give our action and it goes without saying that you can name it whatever you want

the next line tho is where we specify the event on which this action to trigger on, for this one we keep it simple and just use the push event, which simply means that the action/workflow will run whenever something is pushed onto this branch, there are quite a lot of triggers that you can chose from tho,

The next section is where all the magic happens, this part is called the action block and it is in here that we provide info on how to run our action, here's a little breakdown of this section

- `jobs:` is the base component of a workflow
- `build:` is the identifier we're attaching to this job, you can name it however you like, i called it build because it builds our docker image 🤷
- `name:` is the name of the job, this is displayed on GitHub when the workflow is running
- `runs-on:` defines the type of machine to run the job on. By default it is run on a GitHub-hosted runner, you can specify your own as well tho.
- `steps:` are the _linear_ sequence of operations that make up a job, simple
- `uses: actions/checkout@v1` uses a community action called [`checkout`](https://github.com/actions/checkout) to allow the workflow to access the contents of the repository
- `uses: ./action` provides the relative path to the action you created in the `action` directory of your repository
- `with`: is used to specify the input variables that will be available to your action in the runtime environment. In this case, the input variable is `MESSAGE` and i've assigned it a value of "GOT SOME GITHUB ACTION 🏆"

That's basically a high level overview of each key that we use in this current workflow, not to mention there are quite literally ton of more other option that you can use

Now onto our last step which is

# Step 5 : Trigger your workflow

As the final step there isn't much to do here but make sure that if you've been following along At this point you're tree should something like so :

```
.
|-- .github
|   `-- workflows
|       `-- getsome.yml
|-- action
|   |-- Dockerfile
|   |-- action.yml
|   `-- index.sh
`-- readme.md
```

If it is then well done, all that's left to do is to stage and commit these changes and push them to github

As soon as you do that navigate to the actions tab on you github repo and there you should see a an action running, click on it to see the action you just created in action and it should look something similar to this :

![[githubaction.gif]]

If you see something similar to this, then **Congratulations** you've just made your first github action

Although it is quite the basic and we barely scratched the surface i highly encourage you to check out the [Github actions docs](https://docs.github.com/en/actions) to learn more about it,

The reason i wrote this blog is that i personally had quite a lot of fun building it and so i thought is should share it with others as well, Hope you folks liked and enjoyed it to and as always wish to see you in the next one 👋
