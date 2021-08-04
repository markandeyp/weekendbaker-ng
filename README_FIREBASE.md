# Create a new project in firebase
login to [Firebase Console](firebase.google.com) and create a new project. Copy the configuration details

# Adding firebase to project

Run `ng add @angular/fire` to add angular firebase library to your project

# Update environment.ts

Update `environment.ts` to include your firebase config

`
export const environment = {
  production: false,
  firebase: {
    //paste firebase config here
  },
};
`
