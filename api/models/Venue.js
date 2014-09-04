/**
* Venue.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	nama: {
            type: 'STRING',
            required: true
        },
  	namaRuangan: 'string',
  	jalan: 'string',
  	alamatTambahan: 'string',
  	kota: 'string',
    provinsi: 'string',
  	negara: 'string',
  	kodePos: 'string',
  	latitude: 'string',
  	longitude: 'string',
  	webURL: 'string',
    kapasitas: 'int',
    placeID: 'string',
    tipe: {
      type: 'string'
    }

  }


};

