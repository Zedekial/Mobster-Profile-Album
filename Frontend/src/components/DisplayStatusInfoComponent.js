import React from 'react';
import '../CSS/DisplayStatusInfoComponent.css'


const LoadingMessage = () => {
  let setDotInterval;
  let loadingDots = '';
  let createLoadingDots = setInterval (() => {
    console.log('inside func');
    if ( loadingDots.length > 3 ) {
      loadingDots = '';
    } else {
      loadingDots += '.'
    }
  },300);
  clearInterval(createLoadingDots);
  return (
      <h1>Loading<span id='dots'>{loadingDots}</span></h1>
  )
}

const ErrorMessage = () => {
  console.log('ErrorMessage')
  return (
    <h1>Error!</h1>
  )
}

const NoSearchResultsMessage = () => {
  console.log('NoSearchResultsMessage')
  return (
    <h1>No Results</h1>
  )
}

export const DisplayStatusInfoWindow = (props) => {
  return (
    <div className='displaystatus-infowindow--container'>
      {(()=> {
        switch(props.state.displayMessage) {
          case 'loading':
            return <LoadingMessage />
          case 'error':
            return <ErrorMessage />
          case 'no results':
            return <NoSearchResultsMessage />
          default:
            return null;
          }
        })()
      }
    </div>
  )
}
