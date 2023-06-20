import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import GamingRoute from './components/GamingRoute'
import TrendingRoute from './components/TrendingRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(pervState => ({
      isDarkTheme: !pervState.isDarkTheme,
    }))
  }

  addSavedVideo = specificVideo => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.findIndex(
      eachObject => eachObject.id === specificVideo.id,
    )
    if (videoObject === -1) {
      this.setState(pervState => ({
        savedVideos: [...pervState.savedVideos, specificVideo],
      }))
    } else {
      savedVideos.splice(videoObject, 1)
      this.setState(pervState => ({
        savedVideos: [...pervState.savedVideos],
      }))
    }
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          changeTheme: this.changeTheme,
          addSavedVideo: this.addSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
