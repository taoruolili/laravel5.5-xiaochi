
<nav class="navigation">
    <ul class="list-unstyled">
        {{--<li class="active"><a href="index.html"><i class="zmdi zmdi-view-dashboard"></i> <span class="nav-label">用户管理</span></a></li>--}}
        <li class="has-submenu">
            <a href="#"><i class="zmdi zmdi-format-underlined"></i> <span class="nav-label">用户管理</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href={{asset("/admin/user")}}>用户列表</a></li>
                {{--<li><a href="">添加用户</a></li>--}}
                <li><a href="">其他</a></li>
            </ul>
        </li>
        <li class="has-submenu">
            <a href="#"><i class="zmdi zmdi-format-underlined"></i> <span class="nav-label">分类管理</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href={{asset("/admin/class")}}>分类列表</a></li>
                <li><a href="{{ asset('/admin/class/create') }}">添加分类</a></li>
                <li><a href="">其他</a></li>
            </ul>
        </li>
        <li class="has-submenu"><a href="#"><i class="zmdi zmdi-album"></i> <span class="nav-label">商品管理</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href={{ asset("/admin/goods") }}>商品列表</a></li>
                <li><a href={{ asset("/admin/goods/create") }}>添加商品</a></li>
                <li><a href="">其他</a></li>
            </ul>
        </li>
        <li class="has-submenu"><a href="#"><i class="zmdi zmdi-collection-text"></i> <span class="nav-label">轮播图管理</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href={{ asset("/admin/carousel") }}>轮播图列表</a></li>
                <li><a href={{ asset("/admin/carousel/create") }}>添加轮播图</a></li>
            </ul>
        </li>
        <li class="has-submenu"><a href="#"><i class="zmdi zmdi-format-list-bulleted"></i> <span class="nav-label">广告管理</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href="tables.html">广告列表</a></li>
                <li><a href="tables-datatable.html">其他</a></li>
            </ul>
        </li>
        <li class="has-submenu"><a href="#"><i class="zmdi zmdi-chart"></i> <span class="nav-label">友情链接管理</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href={{ asset("/admin/friendlink") }}>友情链接列表</a></li>
                <li><a href="charts-chartjs.html">其他</a></li>
            </ul>
        </li>

        <li class="has-submenu"><a href="#"><i class="zmdi zmdi-collection-item"></i> <span class="nav-label">网站配置管理</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href="email-inbox.html">配置列表</a></li>
                <li><a href="email-compose.html">其他</a></li>
            </ul>
        </li>

        <li class="has-submenu"><a href="#"><i class="zmdi zmdi-map"></i> <span class="nav-label">其他</span><span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
                <li><a href="maps-google.html"> Google Map</a></li>
                <li><a href="maps-vector.html"> Vector Map</a></li>
            </ul>
        </li>
    </ul>
</nav>