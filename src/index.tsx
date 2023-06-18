import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Name from './components/Name'
import Message from './components/Message'
import Page from './components/ContextSample'
import Counter from './components/Counter'
import ReducerSample from './components/ReducerSample'
import Parent from './components/Parent'
import { Clock } from './components/Clock'
import UseContextSample from './components/UseContextSample'
import ImageUploader from './components/UseRefSample'
import UseImperativeHandle from './components/UseImperativeHandle'
import Input from './components/Input'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <Fragment>
    {/* <App /> */}
    <Name />
    <Message />

    <Page />
    <Counter initialValue={0} />
    <ReducerSample initialCount={0} />
    <Parent />
    <Clock />
    <UseContextSample />
    <ImageUploader />
    <UseImperativeHandle />
    <Input />
  </Fragment>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
