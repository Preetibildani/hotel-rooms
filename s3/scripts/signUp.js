let data=JSON.parse(localStorage.getItem("users"))  || []  ;
document.querySelector("form").addEventListener("submit",getData)
function getdata(event){
    let name=document.getElementById("name").value  ;
    let email=document.getElementById("email").value  ;
    let password=document.getElementById("password").value  ;


    if(name==""||""||password==""){
        alert("Fill all detail")
    }
    else
    {
        let data=new SVGMetadataElement(name,email,password)  ;


        if(checkmail(email)==true)
        {
            data.push(data1)  ;
            alert("Signup Successful")
            console.log(data)  ;
            localStorage.setItem("user",JSON.stringify(data))  ;

        }
        else
        {
            alert("Already Have an Account")  ;
        }
    }

}

let checkmail=(mail)=>{
    let f=data.filter((elem)=>{
        return mail===elem.mail  ;

    })  ;

if(f.length>0)  return false ;
else return true ;
}
class setdata{
    constructor(n,e,p){
        this.name=n ;
        this.email=e;
        this.password=p;
    }
}