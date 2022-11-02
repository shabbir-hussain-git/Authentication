
const URL = "http://localhost:4000/"
const register = async (username,password)=>{
    
    let resp = {};
 
      try{
        const response = await fetch(
          URL+'register',{
            method:'POST',
            body:{
              username:username,
              password:password
            }
          }
        );
        resp = await response.json();
      }catch(e){
        // console.error(e)
      }
   
    console.log(resp);
    return resp;
}

const doLogin = async (username,password)=>{
  let resp = {};
 
  try{
    const response = await fetch(
      URL+'doLogin');
    resp = await response.json();
  }catch(e){
    // console.error(e)
  }

  return resp;
}

export default register;
export {doLogin}