function Random(){

  let number = Math.random() * 1000;

  return <h1 style={{'background-color':'#736969'}}>Random number is: J{Math.round(number)}</h1>
}

export default Random;   