import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  savedVideos: [],
  changeTheme: () => {},
  addSavedVideo: () => {},
})

export default NxtWatchContext
