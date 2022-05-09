//Reverse a String

function reverseString(str) {
    let ans= "";
    for (let i = str.length-1;i >= 0;i--) {
        ans+= str[i];
    }
    return ans;
}
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

//Append an Object

let insertobject=(arr,num) =>{
    arr.push(num);
    console.log(arr);
}
let array=[10,9,8];
let object= {Location : 'coimbatore',lattitude :'543.88N'};
insertobject(array,object);

//Armstrong number

let add=0;
const num = 372;
let temp = num;
while (temp > 0)
{
    let remainder = temp % 10;
    add += remainder * remainder * remainder;
    temp = parseInt(temp/10);
}
if (add == num)
{
    console.log('Yes');
}
else {
    console.log('NO');
}


//Application 

//HTML CODE
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Details</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> 
</head>
<body>
  <form>
  <formform  onsubmit="submit_form()">
  <div class="form-group">
   <h4>Name</h4>
    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name">
  </div>
  <div class="form-group">
   <h4>Age</h4>
    <input type="number" class="form-control" id="age" placeholder="Enter your age">
  </div>
   <div class="form-group">
  <h4>Gender</h4>  
<input type="radio" id="female"  value="female">
  <label for="female">Female</label>
<input type="radio" id="male"  value="male">
  <label for="male">Male</label>
  </div>
   <div class="form-group">
   <h4>Phone number</h4>
    <input type="Number" class="form-control" id="Number" placeholder="Enter your Contact Number">
  </div>
   <div class="form-group">
   <h4>Email</h4>
    <input type="text" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="Enter Your Email">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <script src="forms.js"></script>
</form>
</body>
</html>  

{/* JS CODE   (FORMS.JS) */}

function submit_form(){  
    alert("Login successfully");  
    }  
    function create(){  
    window.location="signup.html";  
    }