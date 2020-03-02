import { firebase } from '~/services/database.js'

export default function ({
  isServer,
  redirect,
  store
}) {
  // the server can never be authed for a single account
  if (!isServer && !store.getters.isAuthenticated && !firebase.apps.length) {
    redirect('/')
  }
}
