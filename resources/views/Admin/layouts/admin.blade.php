<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">
    <meta name="author" content="Coderthemes">

    <link rel="shortcut icon" href="img/favicon_1.ico">

    <title>@yield('title')</title>


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
    <!--公共的css样式-->
    @include('Admin.public.style')

    {{--公共的js--}}
    @include('Admin.public.js')

</head>

<body>

<!-- Aside Start-->
<aside class="left-panel">

    <!-- logo部分 -->
@include('Admin.public.logo')
<!-- / brand -->

    <!-- 侧边栏 -->
    @include('Admin.public.aside')

</aside>
<!-- Aside Ends-->

<!--Main Content Start -->
<section class="content">

    <!-- 头部导航栏 -->
@include('Admin.public.header')
<!-- Header Ends -->


    <!-- Page Content Start -->
    <!-- 显示内容部分占位 -->
    @section('content')

    @show
    <!-- Page Content Ends -->

    <!-- 底部栏 -->
@include('Admin.public.footer')
<!-- Footer Ends -->



</section>
<!-- Main Content Ends -->
{{--底部js--}}
@include('Admin.public.footjs')

@yield('script')
</body>
</html>
