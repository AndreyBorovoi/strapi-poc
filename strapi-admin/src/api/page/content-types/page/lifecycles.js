var validateSequenceOfComponents = require('../../validators/validateSequenceOfComponents').validateSequenceOfComponents;

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    // console.log(event.params);
    // console.log("data", data);
    // console.log("where", where);
    // console.log("select", select);
    // console.log("populate", populate);

    // Пока нет возможность валидировать каждое поле 
    // фича в кандидатах https://feedback.strapi.io/security/p/validations
    // Можно просто выбрасывать ошибку
    // но надо подумать как пробросить текст в ui
    if(!validateSequenceOfComponents(data.SequenceOfComponents)){
      throw Error('text')
    }

  },

  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;

    // console.log(event.params);
    // console.log("data", data);
    // console.log("where", where);
    // console.log("select", select);
    // console.log("populate", populate);
    
    
    if(!validateSequenceOfComponents(data.SequenceOfComponents)){
      throw Error('text')
    }
  }

};