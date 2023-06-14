import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import Feed from './components/feed/Feed';
import VideoDetail from './components/videoDetail/VideoDetail';
import ChannelDetail from './components/channelDetail/ChannelDetail';
import SearchFeed from './components/searchFeed/SearchFeed';

import './App.css';

function App() {
  

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: "#000"}}>
      <Navbar />
        <Routes>
          <Route  path="/" exact element={<Feed />} />
          <Route  path="/video/:id" element={<VideoDetail />} />
          <Route  path="/channel/:id" element={<ChannelDetail />} />
          <Route  path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
