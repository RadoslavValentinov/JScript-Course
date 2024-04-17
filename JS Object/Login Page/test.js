function allFieldSecurity(){
    let getInput =Array.from(document.getElementById("securityinput"));
          
     let d = getInput[0].value;
     let s =  getInput[1].value;
      let a =  getInput[2].value;


     return new{d,s,a};
  }