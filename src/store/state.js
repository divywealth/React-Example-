const AppState = {
    loggedIn: false,
    todos: [
      { id: 1, text: 'Learn React'},
      { id: 2, text: 'Learn Redux'},
      { id: 3, text: 'Build something fun!'}
    ],
    filters: {
      status: 'Active',
      colors: ['red', 'blue']
    },
    name: 'Zubby'
  }

export default AppState;