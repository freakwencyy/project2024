// hover window activation

document.addEventListener("keydown", onKeyPressed);

const KonamiEn=['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',  'b', 'a'];
const KonamiRus=['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'и', 'ф'];
let KonamiNew = [];
let h_win_activation = 0;

function onKeyPressed(e) {
    var keyCode = e.keyCode;
    var key = e.key;
    console.log('Key Code: ' + keyCode + ' Key: ' + key);

    if(key=='ArrowUp' || key=='ArrowDown' || key=='ArrowLeft' || key=='ArrowRight' || key=='b' || key=='и' || key=='a' || key=='ф') {
        KonamiNew.push(key);
        console.log('Element pushed');
        console.log(KonamiNew);

        if(KonamiNew.length == KonamiEn.length) {
            console.log('10 elements reached');
            // for (var n = 0; n <= KonamiEn.length; ++n) {
            //     if ((KonamiNew[n] == KonamiEn[n])) {
            //         h_win_activation = 1;
            //     } else { continue; } 
                // ВСЁ ЕЩЁ НЕ ГОТОВО ГОСПОДИ АААААААААААААААААА
            if (KonamiNew[0] == KonamiEn[0] && KonamiNew[1] == KonamiEn[1] && KonamiNew[2] == KonamiEn[2] && KonamiNew[3] == KonamiEn[3] && KonamiNew[4] == KonamiEn[4] && KonamiNew[5] == KonamiEn[5] && KonamiNew[6] == KonamiEn[6] && KonamiNew[7] == KonamiEn[7] && KonamiNew[8] == KonamiEn[8] && KonamiNew[9] == KonamiEn[9]) {
                console.log('Success!');
                h_win_activation=1;
            } else {
                console.log('michael you fucking stoopid');
            }
        }
        } else {
        console.log('ARRAY CLEARED!');
        KonamiNew = []; } 

    if (h_win_activation == 1) {
        console.log('does it work like it should?');
        h_win_activation = 0;
    }

}

// themes

// function consoleThemeChanger (f) {
//     var theme = f.theme;

// }