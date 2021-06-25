# Game Play

Mobile app developed with React Native using Expo to schedule games in Discord. This app was developed during the _Next Level Week_ (20/06/2021 - 27/06/2021) organized by [Rocketseat](https://rocketseat.com.br/)

This app implements authentication using OAuth2 protocol with a Discord account and allows to schedule game with friends in several Discord servers and lists all the scheduled games and the details of each listed server/guild. If the logged user is the owner of a certain server/guild, the user can also share the invitation for the game by any app that is installed in the mobile phone and directly be redirected to the game in the Discord App.

As extra-features to the app teached in the video lessons, this project implemented:

- locales with i18n and can be visualized either in english or in portuguese, with the flexibility to add more languages
- generation of random greeting sentence in the Home screen, when the user access the app, among some pre-defined sentences
- Show Alert component with customized error messages when fetch data from api or async storage fails
- Show message when there are no appointments and no grids to display, in Home screen and Guilds modal, respectively.
- - Create _NoData_ component to display in Guilds, Home and Appointment details screen when the fetched array is empty

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development using Expo Go

```
yarn start
```

### Build expo app for android devices

```
expo build:android
```

### Build expo app for ios devices

```
expo build:ios
```
