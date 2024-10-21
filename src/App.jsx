import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicSlider from './components/BasicSlider'
import CustomHandleSlider from './components/CustomHandleSlider'
import ImageGallerySlider from './components/ImageGallerySlider'
import StepSlider from './components/StepSlider'
import SliderWithTooltip from './components/Tooltip'
import VerticalSlider from './components/VerticalSlider'
// import RangeSliderExample from './components/RangeSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BasicSlider/>
     <CustomHandleSlider/>
     <ImageGallerySlider/>
     {/* <RangeSliderExample/> */}
     <StepSlider/>
     <SliderWithTooltip/>
     <VerticalSlider/>
    </>
  )
}

export default App
