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

    <h2>TASKOVI:</h2>
    @endsection


    @section('sadrzaj')

    <div id="todos"></div>
    @endsection

    @section('nazad')
    <a style="color:white" class="btn btn-lg btn-block" href="/">Nazad</a>
    @endsection


</body>

</html>