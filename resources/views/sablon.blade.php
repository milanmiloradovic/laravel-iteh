<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<style>
    * {
        padding: 0;
        margin: 0;
    }
</style>




<div style="height:20vh; background-color:#524948; color:white;" class="d-flex justify-content-center">
    <div>
        <h2 align="center">DOBRODOSLI!</h2>
        <h3>@yield('header')</h2>
    </div>
</div>
<div style=" background-color:#CAFE48; height:60vh;">
    <div> @yield('sadrzaj') </div>
</div>
<div style="background-color:#524948; color:white;height:20vh;position:sticky; bottom:0; right:0;">
    <div style="position:absolute; bottom:0; right:0;">By Milan Miloradovic</div>
    <div style="position:absolute; bottom:30%; left:0;">@yield('nazad')</div>

</div>
<script src="../js/app.js"></script>