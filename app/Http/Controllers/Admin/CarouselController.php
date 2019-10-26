<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Mockery\CountValidator\Exception;


class CarouselController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('Admin.carousel.carouselList');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //轮播图添加页面
        return view('Admin.carousel.carouselAdd');
    }

    /**
     * @param Request $request
     * @return bool|string
     */
    public function store(Request $request)
    {
        try{

            $file = Input::file('img');

            if($file->isValid()){

                $extension = $file->getClientOriginalExtension();

                $newName = date('YmdHis').mt_rand(100,999).".".$extension;

                $path = $file->move(public_path('admin/images/'),$newName);
                if(empty($path)){
                    throw new Exception("图片上传失败！",500);
                }

                return $newName;
                /*//检验上传的文件是否有效
                $clientName = $file->getClientOriginalName();//获取文件名称
                $tmpName = $file->getFileName();  //缓存在tmp文件中的文件名 例如 php9732.tmp 这种类型的
                $realPath = $file->getRealPath();  //这个表示的是缓存在tmp文件夹下的文件绝对路径。
                $entension = $file->getClientOriginalExtension(); //上传文件的后缀
                $mimeType = $file->getMimeType(); //得到的结果是imgage/jpeg
                $path = $file->move('storage/uploads');
                //如果这样写的话,默认会放在我们 public/storage/uploads/php9372.tmp
                //如果我们希望将放置在app的uploads目录下 并且需要改名的话
                $path = $file->move(app_path().'/uploads'.$newName);
                //这里app_path()就是app文件夹所在的路径。$newName 可以是通过某种算法获得的文件名称
                //比如 $newName = md5(date('YmdHis').$clientName).".".$extension;*/
            }

        }catch (Exception $e){
            //写入错误日志
            app("log")->Error($e->getMessage());
            //返回失败
            return false;
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
