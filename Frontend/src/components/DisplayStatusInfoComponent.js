import React from 'react';
import '../CSS/DisplayStatusInfoComponent.css';
import '../CSS/MainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const LoadingMessage = () => {
  return (
      <h1 className='loading__content'>
        Loading
        <span className='loading__content--icon--wrap'>
          <FontAwesomeIcon className="fa-2x fa-pulse loading__content--icon--animated" icon="spinner" />
        </span>
      </h1>
  )
}

const ErrorMessage = (props) => {

  let toggleErrorDisplay = () => {
    let errorTextbox = document.getElementsByClassName('error__message--more-info-textbox')[0]
    if(!errorTextbox.classList.contains('show') && !errorTextbox.classList.contains('hide')) {
      errorTextbox.classList.toggle('show');
    }else {
      errorTextbox.classList.toggle('show');
      errorTextbox.classList.toggle('hide');
    }
  }

  return (
    <div>
      <h1>Error while loading data!</h1>
      <h3 className='error__message--more-info-header' onClick={toggleErrorDisplay}>More info</h3>
      <p className='error__message--more-info-textbox hide'>{props.errorDetails}
        <button className='standard__button__style' onClick={props.getMobsterData}>Try Again?</button>
      </p>
    </div>
  )
}

const NoSearchResultsMessage = (props) => {
  return (
    <div>
      <h1>Your search returned no results</h1>
      <p>You searched for: {props.state.searchText}</p>
      <ul>
      Perhaps you meant:
        <SuggestedSearch
          state={props.state}
        />
      </ul>
    </div>
  )
}

const SuggestedSearch = (props) => {
  let trimmedSearchPhrase = props.state.searchText.slice(0, props.state.searchText.length -2).toLowerCase()
  return (
    props.state.data.map(mobster => {
      if(mobster.name.toLowerCase().includes(trimmedSearchPhrase)) {
        return <li key={mobster.id}>{mobster.name}</li>
      }else {
        return null
      }
    })
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
            return <ErrorMessage
                      errorDetails={props.state.errorDetails}
                      getMobsterData={props.getMobsterData}
                    />
          case 'no results':
            return <NoSearchResultsMessage
                    state={props.state}
                  />
          default:
            return null;
          }
        })()
      }
    </div>
  )
}
