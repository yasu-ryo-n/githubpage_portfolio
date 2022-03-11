// 80歳まで生きると仮定した場合後何秒生きられるかを表示するプログラム
var myBirthTime = new Date(2004, 11, 25, 0, 0);
function updateParagraph() {
    var now = new Date();
    var second = (now.getTime() - myBirthTime.getTime()) / 1000;
    var answer = (2522880000 - second);
    document.getElementById('birth-time').innerText = 'あなたの寿命は残り' + answer + '秒です';
}
setInterval(updateParagraph, 50);

// 三角形の面積を求める関数
function summation(r) {
    var summation = r * r * 3.14;
    document.write(summation(2));
}
