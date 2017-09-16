# Vue

## Depend package

- `zls.init`

## Step

1. `mkdir ColgateCRM_Vue && cd ColgateCRM_Vue`

2. `git init && git config -–local core.autocrlf input && git config --local core.safecrlf true`

3. `git remote add master http://office.gzmediaclick.com:3000/soseek/ColgateCRM_Vue.git`

4. `git fetch --progress --prune --recurse-submodules=no master && git branch --set-upstream-to=master/master master`

5. `git checkout master`

## Folder structure

- `src/`: App files
  - `components/`: Components directory
  - `pages/`: view directory
  - `index.js`: App entry file
- `zls.config.js`: Config file for zls
- `package.json`: App manifest
- `.editorconfig`: Ensure consistent editor behaivor
- `.gitignore`: Ignore files we don't need to push

## Commands

- `yarn dev`: Run in development mode
- `yarn build`: Build in production mode
- `yarn lint`: Run eslint

## Docs

[vuejs](http://vuejs.org/)

[vue-router](https://router.vuejs.org/en/)

[axios](https://github.com/mzabriskie/axios)

[less](http://lesscss.org/)

## Notice

- For Windows user, you may have to force IDE use LF as line seperator

---
