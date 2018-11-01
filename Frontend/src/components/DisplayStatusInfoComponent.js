import React from 'react';
import '../CSS/DisplayStatusInfoComponent.css'

const LoadingMessage = () => {
  console.log('LoadingMessage')
  return (
    <h1>Loading!</h1>
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
