const getData = () => {
   let data =  localStorage.getItem('applied-jobs');
   return JSON.parse(data)
}

const setData = data => {
    
    localStorage.setItem('applied-jobs', JSON.stringify(data))}


export {getData, setData}