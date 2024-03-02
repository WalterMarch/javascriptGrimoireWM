# JavaScript Grimoire

## a book of JavaScript (programming) magic

The repository is part of the larger [Grimoire Programmatica](https://github.com/WalterMarch/grimoireprogrammatica) project.

I'm currently a Software Engineer who has started to work more with JavaScript and TypeSript in both [Retool](https://github.com/tryretool) and the [AWS CDK](https://github.com/aws/aws-cdk).

## Run the Sample Code

In the `sample` directory, run this command:

```bash
node server.js
```

Open the URL output by the script to verify.

### miscellany

`configit.sh` looks like this:

```bash
#!/bin/bash

git config --global user.email "yourEmail@mail.com"
git config --global user.name "yourGitUserName"
git config --global push.autoSetupRemote true

git config --global --add safe.directory $1
```
