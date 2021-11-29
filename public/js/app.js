console.log('Client side javascript file is loaded!')



const searchForm=document.querySelector('form')
const search=document.querySelector('input')

searchForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    const location=search.value
    document.querySelector('#message-1').textContent='Loading...'
    document.querySelector('#message-2').textContent=''

        fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response) => {
            response.json().then((data) => {

               
                if (data.error) {
                    document.querySelector('#message-1').textContent=data.error
                    document.querySelector('#message-2').textContent=''
                    //console.log(data.error)
                } else {
                    document.querySelector('#message-1').textContent=data.location
                    document.querySelector('#message-2').textContent=data.forecast
                   // console.log(data.location)
                   // console.log(data.forecast)
                }
            })
        })

   
        
    
})