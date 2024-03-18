function Hello() {

  let myName = 'AMIT';
  let number = 428;
  let fullName = () => {
    return 'Amiteshwar Kumar'
  }

  return <h3>
    Hello!! this is MessageN0: {number} I'm your master {myName}({fullName()}).
  </h3>
}

export default Hello;