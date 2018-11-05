import React from 'react';
import '../CSS/DisplayStatusInfoComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LoadingMessage = () => {

  return (
      <h1 className='loading__content'>
        Loading
        <span className='loading__content--icon--wrap'>
          <FontAwesomeIcon className="fa-2x fa-pulse loading__content--icon--animated" icon="spinner" />
        </span>
      </h1>
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
