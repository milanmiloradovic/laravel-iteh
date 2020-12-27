<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Todos</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


</head>

<body>
    @extends('sablon')
    @section('header')

    <h2>Izaberite neku od opcija dole</h2>
    @endsection
    @section('sadrzaj')
    <div class="d-flex align-items-center justify-content-center">
        <a class="btn btn-lg btn-block btn-primary " href="/todos">Pregled taskova </a>
    </div>
    @endsection
</body>

</html>