function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("Seluruh Arkademian mengucapkan selamat ramadhan!"));
console.log(longestWord("Halo Arkademian!"));
console.log(longestWord("Baju ini sangat bagus sekali"))