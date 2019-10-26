<?php

namespace App\Http\Controllers\Admin;

use App\Model\Admin\FriendlinkModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FriendlinkController extends Controller
{
    /**
     * FriendlinkController constructor.
     */
    public function __construct(FriendlinkModel $friendlinkModel)
    {
        //注入model
        $this->friendlinkModel = $friendlinkModel;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //获取数据
        $res = $this->friendlinkModel->orderBy('id', 'desc')->get();

        //返回友情链接列表页
        return view('Admin.Friendlink.friendlinklist',['data'=>$res]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //获取要添加的链接名
        $name = $request->only('name')['name'];
        //查询数据库中有没有此用户
        $result = $this->friendlinkModel->where('name',$name)->first();
        //如果存在返回错误信息提示
        if(!empty($result)){
            echo '<h1 align="center" style="color:red">链接名已存在,添加失败！</h1>';
            header("Refresh:2;url=/admin/friendlink");die;
        }
        //获取要添加的数据
        $res = $request->except('_token');
        //调用model添加数据
        $data = $this->friendlinkModel->create($res);
        //判断返回信息
        if($data){
            echo '<h1 align="center" style="color:green">添加成功，即将跳转页面！</h1>';
            header("Refresh:1;url=/admin/friendlink");die;
        }else{
            echo '<h1 align="center" style="color:red">添加失败，即将跳转页面！</h1>';
            header("Refresh:2;url=/admin/friendlink");die;
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
        //查询单条数据
        $data = $this->friendlinkModel->find($id);
        //返回信息
        return response($data, 200);
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
        //获取要修改的数据
        $res = $request->except('_token');
        //调用model进行修改数据
        $data = $this->friendlinkModel->where('id',$id)->update($res);
        //判断错误信息
        if($data){
            //成功
            return 1;
        }else{
            //失败
            return 0;
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //删除友情链接
        $res = $this->friendlinkModel->destroy($id);
        //判断返回结果
        if($res){
            //成功
            return '1';
        }else{
            //失败
            return '0';
        }
    }

    /**
     * 检查友情链接名是否已经存在
     */
    public function noFriendlink(Request $request){
        //获取要插入的用户名
        $name = $request->only('name');

        //查询数据库是否存在此用户
        $reuser = $this->friendlinkModel->where('name',$name)->first();

        //判断返回信息
        if($reuser) {
            //存在返回信息
            return '1';
        }
    }
}
