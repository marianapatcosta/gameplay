# Game Play

Mobile app developed with React Native using Expo to schedule games in Discord. This app was developed during the _Next Level Week_ (20/06/2021 - 27/06/2021) organized by [Rocketseat](https://rocketseat.com.br/)

This app implements authentication using OAuth2 protocol with a Discord account and allows to schedule game with friends in several Discord servers and lists all the scheduled games and the details of each listed server/guild. If the logged user is the owner of a certain server/guild, the user can also share the invitation for the game by any app that is installed in the mobile phone and directly be redirected to the game in the Discord App.

As extra-features to the app teached in the video lessons, this project implemented:

- Implementation of multilanguage with i18n-js and expo-localization; the app can be visualized either in english or in portuguese, with the flexibility to add more languages.
- Implement Edit and Delete appointment functionalities.
- Development UserProfile screen, to handle the logout, language ant theme settings and a link to user's profile in Discord.
- Development of Logout modal to signout.
- Development of useTheme hook to implement dark and light themes.
- Implementation of useAsyncStorage hook to abstrat the storage management logic.
- Implementation of a function to generate a random greeting sentence in the Home screen, when the user access the app, among some pre-defined sentences.
- Implementation of Alert component with customized error messages when fetch data from api or async storage fails
- Creation of _NoData_ component to display a message when there are no appointments, no members and no grids to display, in Home screen, Appointment Screen and Guilds modal, respectively.
- Add RefreshControl component and the required logic to refresh the content of all the FlatLists implemented in the app.
- Validate Appointment creation form for empty values and invalid date; disable button when form is not completely fullfilled.

![gameplay-overview](https://user-images.githubusercontent.com/43031902/123541367-12e5ed00-d73c-11eb-9728-5ab5e274fa38.png)

## Project setup

```
yarn install
```

Be sure that the _.env.example_ file is renamed to _.env_ and all the values for the variables declared in this file are properly fullfilled with data of your own.

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
