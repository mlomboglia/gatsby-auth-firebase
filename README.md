# Gatsby Authentication Flow with Firebase

This is a simplified demo to show how an authentication workflow is implemented in Gatsby with Firebase.

The short version is:

- Gatsby statically renders all unauthenticated routes as usual
- Authenticated routes are allowed as client-only
- Logged out users are redirected to the login page if they attempt to visit private routes
- Logged in users will see their private content

