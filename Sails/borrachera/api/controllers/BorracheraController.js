/**
 * BorracheraController
 *
 * @description :: Server-side logic for managing borracheras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


attributes: {
    Motivo:{
      type:'string'
    },
    LatitudDondeEmpezo:{
      type:'integer'
    },
    LongitudDondeEmpezo:{
      type:'integer'
    }
  }
};

