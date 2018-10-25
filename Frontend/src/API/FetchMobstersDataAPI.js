import DataTest from '../components/dataTest.json';


const FetchMobsterData = () => {
  fetch(DataTest)
    .then(res => {
      console.log(res)
      let mobsterData = res
      return mobsterData
    })

};

export default FetchMobsterData;

