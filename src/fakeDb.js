const getData = () => {
   let data =  localStorage.getItem('applied-jobs');
   if(data){
    return JSON.parse(data)
   }
   else{
    return []
   }
}

const setData = data => {
    
    localStorage.setItem('applied-jobs', JSON.stringify(data))}


export {getData, setData}