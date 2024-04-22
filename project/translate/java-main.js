// var input = document.querySelector('#clear');
// var textarea = document.querySelector('#leftwin');

// input.addEventListener('click', function () {
// 	textarea.value = '';
// }, false);


function clearLogs() {
    // document.getElementById("clear").textContent = "";
    console.log("aaa");
}

function docID() {
    let a = document.getElementById("leftwin").value;
    // if (a == "aaa") {
    //     console.log("wow");
    // }
    console.log(a);
    if(NameIsOnTheLeft==true) {
        switch(a) {
            case 'Элемент': {
                document.getElementById('PInRightwin').innerHTML = "Его формула";
                document.getElementById('1').innerHTML = "Значение его приставки";
                document.getElementById('2').innerHTML = "Значение его корня";
                document.getElementById('3').innerHTML = "Например, значение его второго корня";
                document.getElementById('4').innerHTML = "Значение его суффикса";
                document.getElementById('5').innerHTML = "И так далее. Здесь можно писать что угодно и сколько угодно";

                document.getElementById('11').innerHTML = "Его приставка";
                document.getElementById('22').innerHTML = "Его корень";
                document.getElementById('33').innerHTML = "Его второй корень";
                document.getElementById('44').innerHTML = "Суффикс";
                document.getElementById('55').innerHTML = "аааааааааа";

                document.getElementById("ul").style.display="block";
                document.getElementById("ulul").style.display="block";
    
                break;
            }
            // case 'Муравьиная кислота': {
            //     document.getElementById('PInRightwin').innerHTML = "HCOOH";
            //     break;
            // }
            case 'Другой элемент': {
                document.getElementById('PInRightwin').innerHTML = "Формула другого химического элемента";
                break;
            }

            // Муравьиная кислота

            case 'Муравьиная кислота': {
                document.getElementById('PInRightwin').innerHTML = "HCOOH";

                document.getElementById('spravkaP').innerHTML = "Муравьиная кислота представляет собой бесцветную жидкость с резким запахом и коррозионными свойствами. Температура плавления 8,6°С, а температура кипения около 100°С. Очень хорошо растворяется в воде, бензине и этиловом спирте.";
                document.getElementById('propsP').innerHTML = "Название элемента не может быть разобрано на части слова.";

                break;
            }
            case 'Дигидрофосфат натрия': {
                document.getElementById('PInRightwin').innerHTML = "NaH₂PO₄";

                document.getElementById('spravkaP').innerHTML = "Муравьиная кислота представляет собой бесцветную жидкость с резким запахом и коррозионными свойствами. Температура плавления 8,6°С, а температура кипения около 100°С. Очень хорошо растворяется в воде, бензине и этиловом спирте.";
                document.getElementById('propsP').innerHTML = "Название элемента может быть разобрано на следующие части слова.";
                document.getElementById('1').innerHTML = "Приставка ДИ указывает на два незамещённых радикалов или соединения";
                document.getElementById('2').innerHTML = "Приставка ГИДРО означает содержание ионов водорода в соединении";
                document.getElementById('3').innerHTML = "ФОСФАТ - указание на соль фосфорных кислот";
                document.getElementById('4').innerHTML = "";
                document.getElementById('5').innerHTML = "";

                break;
            }
            case 'Трикальций фосфат': {
                document.getElementById('PInRightwin').innerHTML = "Ca₃(PO₄)₂";

                document.getElementById('spravkaP').innerHTML = "Ортофосфа́т ка́льция — неорганическое вещество, соль кальция и ортофосфорной кислоты с химической формулой Ca₃(PO₄)₂. Существует в виде двух модификаций, отличающихся физическими свойствами. Содержится в костной ткани, входит в состав минералов.";
                document.getElementById('propsP').innerHTML = "Название элемента может быть разобрано на следующие части слова:";
                document.getElementById('1').innerHTML = "Приставка ТРИ указывает на три незамещённых радикалов или соединения";
                document.getElementById('2').innerHTML = "Приставка КАЛЬЦИЙ означает содержание ионов кальция в соединении";
                document.getElementById('3').innerHTML = "ФОСФАТ - указание на соль фосфорных кислот";
                document.getElementById('4').innerHTML = "";
                document.getElementById('5').innerHTML = "";

                break;
            }
        }
    } else {
        switch(a) {
            case 'HCOOH': {
                document.getElementById('PInRightwin').innerHTML = "Муравьиная кислота";

                document.getElementById('spravkaP').innerHTML = "Муравьиная кислота представляет собой бесцветную жидкость с резким запахом и коррозионными свойствами. Температура плавления 8,6°С, а температура кипения около 100°С. Очень хорошо растворяется в воде, бензине и этиловом спирте.";
                document.getElementById('propsP').innerHTML = "Название элемента не может быть разобрано на части слова.";

                break;
            }

            case 'NaH2PO4': {
                document.getElementById('PInRightwin').innerHTML = "Дигидрофосфат натрия";

                document.getElementById('spravkaP').innerHTML = "Муравьиная кислота представляет собой бесцветную жидкость с резким запахом и коррозионными свойствами. Температура плавления 8,6°С, а температура кипения около 100°С. Очень хорошо растворяется в воде, бензине и этиловом спирте.";
                document.getElementById('propsP').innerHTML = "Название элемента может быть разобрано на следующие части слова.";
                document.getElementById('1').innerHTML = "Приставка ДИ указывает на два незамещённых радикалов или соединения";
                document.getElementById('2').innerHTML = "Приставка ГИДРО означает содержание ионов водорода в соединении";
                document.getElementById('3').innerHTML = "ФОСФАТ - указание на соль фосфорных кислот";
                document.getElementById('4').innerHTML = "";
                document.getElementById('5').innerHTML = "";

                break;
            }

            case 'CA3(PO4)2': {
                document.getElementById('PInRightwin').innerHTML = "Трикальций фосфат";

                document.getElementById('spravkaP').innerHTML = "Ортофосфа́т ка́льция — неорганическое вещество, соль кальция и ортофосфорной кислоты с химической формулой Ca₃(PO₄)₂. Существует в виде двух модификаций, отличающихся физическими свойствами. Содержится в костной ткани, входит в состав минералов.";
                document.getElementById('propsP').innerHTML = "Название элемента может быть разобрано на следующие части слова:";
                document.getElementById('1').innerHTML = "Приставка ТРИ указывает на три незамещённых радикалов или соединения";
                document.getElementById('2').innerHTML = "Приставка КАЛЬЦИЙ означает содержание ионов кальция в соединении";
                document.getElementById('3').innerHTML = "ФОСФАТ - указание на соль фосфорных кислот";
                document.getElementById('4').innerHTML = "";
                document.getElementById('5').innerHTML = "";

                break;
            }

            case 'Другой элемент': {
                document.getElementById('PInRightwin').innerHTML = "Формула другого химического элемента";
                break;
            }
            
        }
    }
}

var NameIsOnTheLeft = true;

function switchmodes() {
    if(NameIsOnTheLeft==true) {
        document.getElementById('name').innerHTML = "Формула элемента";
        document.getElementById('id').innerHTML = "Имя элемента";
        NameIsOnTheLeft = false;
    } else {
        document.getElementById('id').innerHTML = "Формула элемента";
        document.getElementById('name').innerHTML = "Имя элемента";
        NameIsOnTheLeft = true;
    }
}
