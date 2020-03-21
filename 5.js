[
    '993141 -1 1323 14-232'
 ].forEach(function(str) {
     console.log(str.replace(/\D/g, '').replace(/(\d\d\d?)(?=\d\d)/g, '$1-'));
 });