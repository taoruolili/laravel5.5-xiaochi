<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('home/index');
});

/**
 *
 * 前台路由组
 * 命名空间Home
 */
Route::group(['prefix' => 'home', 'namespace' => 'Home'], function () {
    //前台首页路由
    Route::get('index','IndexController@index');
});


/**
 *
 * 后台路由组
 * 命名空间Admin
 */
Route::group(['prefix'=>'admin','namespace' => 'Admin'], function () {
    //后台登录路由
//    Route::get('login','LoginController@index');
    //后台中间件
//    Route::group(['middleware' => 'user:admin'], function () {
        //后台首页路由
        Route::get('index','IndexController@index');
        //后台用户路由
        Route::resource('user','UserController');
        //用户禁用路由
        Route::get('user/jinyong/{id}','UserController@jinyong');
        //用户启用路由
        Route::get('user/qiyong/{id}','UserController@qiyong');
        //后台用户路由（检查用户名是否存在）
        Route::get('usernouser','UserController@nouser');
        //后台分类路由
        Route::resource('class','ClassController');
        //后台商品路由
        Route::resource('goods','GoodsController');
        //后台友情链接路由
        Route::resource('friendlink','FriendlinkController');
        //后台友情链接路由（检查友情链接名是否存在）
        Route::get('noFriendlink','FriendlinkController@noFriendlink');
        //后台轮播图路由
        Route::resource('carousel','CarouselController');
//    });
});