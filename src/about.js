const dob = new Date("11/12/1984");  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
  
//extract year from date      
var year = age_dt.getUTCFullYear();  
  
//now calculate the age of the user  
var age = Math.abs(year - 1970);  

export const about_data = [
    [
        {
            key: 'Birthday',
            value: '11 Dec 1984'
        },
        {
            key: 'Website',
            value: 'vladimir1284.github.io'
        },
        {
            key: 'Phone',
            value: '+53 32 246118'
        },
        {
            key: 'City',
            value: 'Camagüey, Cuba'
        }
    ],
    [
        {
            key: 'Age',
            value: age
        },
        {
            key: 'Degree',
            value: 'PhD.'
        },
        {
            key: 'Email',
            value: 'vladimir.rdguez@gmail.com'
        },
        {
            key: 'Category',
            value: 'Ancillary Professor'
        }
    ]
]