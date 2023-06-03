import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  activeTab: '',
  savedVideos: [],
  changeTheme: () => {},
  changeActiveTab: () => {},
  addSavedVideo: () => {},
})

export default NxtWatchContext
