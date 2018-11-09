import React from 'react'

const CreateMobsterChunks = (props, CreateMobsterChunksCallback) => {
  let mobstersArrayLength = props.length;
  let chunkSize = 16;
  let beggingingIndex = 0
  let numberOfReturnedChunks = mobstersArrayLength / chunkSize;
  let allChunkArray = [];

  for(let j = 0; j < numberOfReturnedChunks ; j++) {
    let mobsterCollection = [];

    for(let i = 0; i < chunkSize; i++) {
      if((i + beggingingIndex) < mobstersArrayLength) {
        mobsterCollection.push(props[i + beggingingIndex]);
      }
    }
    beggingingIndex += chunkSize;
    allChunkArray.push(mobsterCollection);
  }
  CreateMobsterChunksCallback(allChunkArray);
}

export default CreateMobsterChunks
