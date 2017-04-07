var walidacja = 0
//var ilosc_towarow =0;

function showMessage(IDpole, typ, komunikat){
    document.getElementById(IDpole).innerHTML = '<p class="alert alert-' + typ +'">' + komunikat + '</p>';
    if(typ=='danger'){
        walidacja = 1;
    }
}

function imie_czytelnik_walidacja()
{
    var w = document.forms["formularz1"]["imie_czytelnik"].value;
    if(w == "") {
        showMessage("imie_czytelnik_blad", "danger", "Musisz wypełnić to pole!");
    }
    else if(w.length >= 15){
        showMessage("imie_czytelnik_blad","danger", "Imie nie moze byc dluzsza niz 15 znakow!");
    }
    else if(!w.match(/^[a-zA-ZąćęłńóśżźĄĆŁŃÓŚŻŹ$]+$/)){
        showMessage("imie_czytelnik_blad", "danger", "Imie zawiera nie poprawne znaki!");
    }
    else{
        showMessage("imie_czytelnik_blad", "success", "Nazwa poprawna!");
    }
}

function nazwisko_czytelnik_walidacja()
{
    var w = document.forms["formularz1"]["nazwisko_czytelnik"].value;
    if(w == "") {
        showMessage("nazwisko_czytelnik_blad", "danger", "Musisz wypełnić to pole!");
    }
    else if(!w.match(/^[a-zA-ZąćęłńóśżźĄĆŁŃÓŚŻŹ$]+$/)){
        showMessage("nazwisko_czytelnik_blad", "danger", "Nazwisko zawiera nie poprawne znaki!");
    }
    else if(w.length >= 15){
        showMessage("nazwisko_czytelnik_blad","danger", "Nazwisko nie moze byc dluzsze niz 15 znakow!");
    }
    else{
        showMessage("nazwisko_czytelnik_blad", "success", "Nazwisko poprawne!");
    }
}

function pesel_czytelnik_walidacja()
{
    var w = document.forms["formularz1"]["pesel_czytelnik"].value;
    if(w == "") {
        showMessage("pesel_czytelnik_blad", "danger", "Musisz wypelnic to pole!");
    }
    else if(w.length > 11 || w.length < 11 ){
        showMessage("pesel_czytelnik_blad","danger", "Pesel powinien miec 11 cyfr!");
    }
    else if(!w.match(/^[0-9]{11}/)){
        showMessage("pesel_czytelnik_blad", "danger", "Pesel zawiera nie poprawne znaki!");
    }
    else{
        showMessage("pesel_czytelnik_blad", "success", "Pesel poprawny");
    }
}

function numer_czytelnik_walidacja()
{
    var w = document.forms["formularz1"]["numer_czytelnik"].value;
    if(w == "") {
        showMessage("numer_czytelnik_blad", "danger", "Musisz wypełnić to pole!");
    }
    else if(w.length > 9 || w.length < 9 ){
        showMessage("numer_czytelnik_blad","danger", "Numer powinien miec 9 cyfr!");
    }
    else if(!w.match(/^[0-9]{9}/)){
        showMessage("numer_czytelnik_blad", "danger", "Numer telefonu zawiera nie poprawne znaki! Numer powinien miec 9 cyfr!");
    }
    else{
        showMessage("numer_czytelnik_blad", "success", "Numer telefonu poprawny.");
    }
}



function formularz1_walidacja() {

    walidacja = 0;
    imie_czytelnik_walidacja();
    nazwisko_czytelnik_walidacja();
    pesel_czytelnik_walidacja();
    numer_czytelnik_walidacja();


    if (walidacja == 0) {
        alert("OK!");
        //ilosc_towarow += 1;
    }
}
