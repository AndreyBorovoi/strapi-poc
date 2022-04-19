module.exports = {
  validateSequenceOfComponents(sequence) {
    console.log(sequence);
    console.log(Array.isArray(sequence));

    if(!Array.isArray(sequence)){
      return false
    }
  
    return true
  }
}