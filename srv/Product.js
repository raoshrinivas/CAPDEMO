
module.exports = (helloword) => {

  //helloword.on('display', req => `${req.data.input1} word` )
    
   helloword.on('addition', ({data:{input1,input2}}) => input1+input2) 
}