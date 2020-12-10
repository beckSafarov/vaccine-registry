        const name = document.getElementById('name'); 
        const email = document.getElementById('email');
        const date = document.getElementById('date');
        const time = document.getElementById('time');
        const warningBtn = document.getElementById('warning-btn'); 
        
        //date picker 
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {
                autoclose: true, 
                disableWeekends: true,
                firstDay: 1,
                showMonthAfterYear: true, 
                showDaysInNextAndPreviousMonths: true, 
                showClearBtn: true,
            }); 
          });
          
          //time picker
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.timepicker');
            var instances = M.Timepicker.init(elems, {
                showClearBtn: true
            });
         });

         //post function to make a post request to the server
         async function post(url, data){
            
            const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify(data)
            }); 
            const resData = await response.json(); 
            return resData;        
        }

        //make post request with data
        document.getElementById('form').addEventListener('click', function(e){
            e.preventDefault();
            const data = {
                name: name.value,
                email: email.value, 
                date: date.value, 
                time: time.value
            }

            
            post('http://localhost:5000/register', data)
            .then(data => {
                if(data.success == false){
                    warningBtn.innerHTML = data.error; 
                }else{
                    warningBtn.innerHTML = ''; 
                    name.value = '';
                    email.value = '';
                    date.value = '';
                    time.value = '';
                }
                
            })
            .catch(err => console.log(err));
        
        
            
        })//end of the post function 

       