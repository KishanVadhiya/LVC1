function jfun1(){
    // alert("Welcome to JS")
    let name=document.getElementById("Name")
    let designation=document.getElementById("Designation")
    let email=document.getElementById("Email")
    let loc=document.getElementById("location")
    let course=document.getElementById("course")
    // alert(name.value)
    if (name.value=="" || email.value=="") {
      alert("Name and email can't be empty")
    } else {
      alert(
        "Name : "+name.value+
        "\nDesignation: "+designation.value+
        "\nEmail : "+email.value+
        "\nlocation : "+loc.value+
        "\ncourse  :"+course.value
      )
    }
}

function calcSal(){
    // alert("Onchange")
    // alert(document.getElementById("Sal").value)
    let sal=eval(document.getElementById("Sal").value)
    let bonus=sal*document.getElementById("Performance").value
    let totalSal=eval(sal+bonus)
    Employee.Bonus.value=bonus
    Employee.TotalSal.value=totalSal
    // alert("Bonus : "+bonus+"\nTotal Sal : "+totalSal)
    
}

function calcMarks(){
    // let a=false
    // alert(a)
    // alert( )
    let marks=0
    if(document.querySelector('input[name="q1"]:checked').value=="true"){
      marks+=2
    }
    if(document.querySelector('input[name="q2"]:checked').value=="true"){
      marks+=2
    }
    alert("Your marks is : "+marks)
}

function popW(){
    window.open("popWindow.html","","height=400px width=1400px")
}