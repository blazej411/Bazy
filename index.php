<?php
try{
	$pdo = new PDO('mysql:host=mysql.hostinger.pl;dbname=u650621471_bib', 'u650621471_bene', 'kinga123');
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//echo 'Połączenie nawiązane!';
	/*$liczba = $pdo->exec('INSERT INTO `czytelnik` (`imie`, `nazwisko`, `pesel`, `telefon`)	VALUES(
			\'Błażej\',
			\'Mościński\',
			\'94101300934\',
			\'667085653\')');*/
}catch(PDOException $e){
	echo 'Połączenie nie mogło zostać utworzone.<br />';
	echo 'Wystąpił błąd biblioteki PDO: ' . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>lab bazy sem 6</title>

    <link href="bootstrap/bootstrap.min.css" rel="stylesheet">
    <script type="text/javascript" charset="utf-8" src="walidacja.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="bootstrap/bootstrap.min.js"></script>
	
</head>
<body>
<div class="row">
    <div class="col-md-12">

        Hello

    </div>

</div>
<div class="row">
    <div class="col-md-2"> </div>

    <div class="col-md-8">


        <form name="formularz1">
            <div class="form-group">
                <label for="imie_czytelnik">Imię</label>
                <input type="text" class="form-control" id="imie_czytelnik" placeholder="Imię czytelnika" onblur="imie_czytelnik_walidacja()">
                <div id="imie_czytelnik_blad" ></div>
            </div>

            <div class="form-group">
                <label for="nazwisko_czytelnik">Nazwisko</label>
                <input type="text" class="form-control" id="nazwisko_czytelnik" placeholder="Nazwisko czytelnika" onblur="nazwisko_czytelnik_walidacja()">
                <div id="nazwisko_czytelnik_blad" ></div>
            </div>
            <div class="form-group">
                <label for="pesel_czytelnik">Pesel</label>
                <input type="text" class="form-control" id="pesel_czytelnik" placeholder="Pesel czytelnika" onblur="pesel_czytelnik_walidacja()">
                <div id="pesel_czytelnik_blad" ></div>
            </div>
            <div class="form-group">
                <label for="numer_czytelnik">Numer telefonu</label>
                <input type="text" class="form-control" id="numer_czytelnik" placeholder="Numer telefonu czytelnika" onblur="numer_czytelnik_walidacja()">
                <div id="numer_czytelnik_blad" ></div>
            </div>


            </br>
            </br>
            <button type="submit" class="btn btn-default" onclick="formularz1_walidacja()">Dodaj</button>
        </form>



    </div>

    <div class="col-md-2"> </div>
</div>
<div class="row">
    <div class="col-md-12">Lab 1 PDD</div>
</div>
</body>
</html>