/*Выполнила Приходько Ольга, 2 курс, 91 групаа. 1 лабораторная работа
Задача №2: "Охота на куниц с бумерангом"
*/
const REMAINIGJUDGE = 5; //оставшиеся судьи

function arrSum(hunterArray){
    return hunterArray.reduce((sum, elem) => sum + elem);
}

function Average(sumArray){
    return sumArray/REMAINIGJUDGE;
}

function GetPoints(hunterArray){
    let arrayPounts = [0,0,0,0,0,0,0];
    hunterArray.forEach((point,index) => {arrayPounts[parseInt(index/REMAINIGJUDGE)]+=Number(point)});
    let min = Math.min.apply(null, arrayPounts);
    let max = Math.max.apply(null, arrayPounts);
    return Average(arrSum(arrayPounts) - min - max);
}

function GetWinnerHunter() {
    let Points = -6;
    let WinnerName = "";
    let Count = 0;
    do{
        let [HunterName,...hunterArray] = prompt("Введите данные "+ parseInt(Count+1) + "-го участника:").split(',');
        let CurrPoints = GetPoints(hunterArray);
        if (Points < CurrPoints)
        {
            WinnerName = HunterName;
            Points = CurrPoints;
        }

        else if (Points == CurrPoints)
        {
            WinnerName += ", " + HunterName;
        }
        Count++;
    } while(confirm("Добавить еще участников?"));

    alert("Победитель соревнований: "+ WinnerName);
}

GetWinnerHunter();
