const axios = require('axios');
const nconf = require('nconf');

module.exports.getTracks = function (count,pageN,result) {
   axios.get('http://ws.audioscrobbler.com/2.0/',{
                params: {
                    method: 'chart.gettoptracks',
                    limit: count,
                    api_key: nconf.get('apiKey:lastfm') ,
                    format: 'json',
                    page: pageN,
                }
            }).then((resp) => {
                result(resp.data,err = null);
            }).catch((err) => {
                result(result = null, err);
            });
}

