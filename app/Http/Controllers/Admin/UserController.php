<?php

namespace App\Http\Controllers\Admin;

use App\Model\Admin\SourceModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Admin\UserModel;


class UserController extends Controller
{
    /**
     * @var User
     */
    protected $userModel;

    /**
     * @var SourceModel
     */
    protected $sourceModel;

    /**
     * UserController constructor.
     * @param User $user
     */
    public function __construct(UserModel $userModel,SourceModel $sourceModel)
    {
        //注入model
        $this->userModel = $userModel;
        $this->sourceModel = $sourceModel;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Responset
     * 用户列表页显示
     */
    public function index()
    {
        //获取数据
        $sourceData = $this->sourceModel->get()->pluck('cname','id');

        //获取数据
        $data = $this->userModel->orderBy('id', 'desc')->paginate(10);

        //用户列表页
        return view('Admin.user.userList',compact('data','sourceData'));
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
     * 添加用户
     */
    public function store(Request $request)
    {
        //判断用户是否存在
        $user = $this->nouser($request);
        //判断  1 存在  null 不存在
        if($user){
            echo '<h1 align="center" style="color:red">用户名已存在,添加失败！</h1>';
            header("Refresh:2;url=/admin/user");die;
        }

        //接收要添加的数据
        $result = $request->except('_token');

        //判断两次密码是否一致
        if(($request->only('u_pwd')['u_pwd']) != ($request->only('u_repwd')['u_repwd'])){
            echo '<h1 align="center" style="color:red">两次密码不一致,即将跳转页面！</h1>';
            header("Refresh:2;url=/admin/user");die;
        }
        //验证字段
        $this->validate($request, [
            'u_name' =>'required',
            'u_pwd' => 'required|min:6',
            'u_repwd' => 'required|min:6',
            'type' => 'required'
        ],
            [
                'u_name.required' => '用户名不能空!',
                'u_pwd.required' => '密码不能为空!',
                'type.required' => '用户类型不能为空',
                'u_repwd.required' => '确认密码不能空!',
                'u_pwd.min' => '密码不可以小于6位',
                'u_repwd.min' => '确认密码不可以小于6位!',
            ]);

        //获取密码
        $pwd = $request->only('u_pwd');
        //密码加密
        $result['u_pwd'] = md5($pwd['u_pwd']);

        //调用模型添加到数据库
        $res = $this->userModel->create($result);

        //插入成功返回提示信息
        if($res){
            echo '<h1 align="center" style="color:green">添加成功,即将跳转页面</h1>';
            header("Refresh:1;url=/admin/user");

        }else{
            echo '<h1 align="center" style="color:red">添加失败,即将跳转页面</h1>';
            header("Refresh:2;url=/admin/user");
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
        //根据id获取数据
        $res = $this->userModel->find($id);

        return response($res,200);


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
        //判断密码是否为空
        if($res['u_pwd'] && $res['u_repwd']){
            //判断两次密码是否一致
            if(($request->only('u_pwd')['u_pwd']) != ($request->only('u_repwd')['u_repwd'])){
                echo '<h1 align="center" style="color:red">两次密码不一致,即将跳转页面！</h1>';
                header("Refresh:2;url=/admin/user");die;
            }
            //验证字段
            $this->validate($request, [
                'u_name' =>'required',
                'u_pwd' => 'required|min:6',
                'u_repwd' => 'required|min:6',
                'type' => 'required'
            ],
                [
                    'u_name.required' => '用户名不能空!',
                    'u_pwd.required' => '密码不能为空!',
                    'type.required' => '用户类型不能为空',
                    'u_repwd.required' => '确认密码不能空!',
                    'u_pwd.min' => '密码不可以小于6位',
                    'u_repwd.min' => '确认密码不可以小于6位!',
                ]);
            //去除重复密码和token
            unset($res['_token']);
            unset($res['u_repwd']);
            //密码加密
            $res['u_pwd'] = md5($res['u_pwd']);
            //修改数据
            $data = $this->userModel->where('id',$id)->update($res);
            //判断
            if($data){
                return 1;
            }else{
                return 0;
            }

        }
        //拼接要修改的数据
        $v['u_name'] = $request['u_name'];
        $v['type'] = $request['type'];
        //调用model修改数据
        $d = $this->userModel->where('id',$id)->update($v);
        //判断
        if($d){
            return 1;
        }else{
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
        //删除用户
        $res = $this->userModel->destroy($id);
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
     * 检查用户名在数据表中是否已经存在
     */
    public function nouser(Request $request){
        //获取要插入的用户名
        $u_name = $request->only('u_name');

        //查询数据库是否存在此用户
        $reuser = $this->userModel->where('u_name',$u_name)->first();

        //判断返回信息
        if($reuser) {
            //存在返回信息
            return '1';
        }
    }

    /**
     * @param $id
     * @return int
     * 禁用
     */
    public function jinyong($id){
        //修改数据
        $res = $this->userModel->where('id',$id)->update(['status'=>2]);
        //判断错误信息
        if($res){
            //成功
            return 1;
        }else{
            //失败
            return 2;
        }
    }

    /**
     * @param $id
     * @return int
     * 启用
     */
    public function qiyong($id){
        //修改数据
        $res = $this->userModel->where('id',$id)->update(['status'=>1]);

        //判断错误信息
        if($res){
            //成功
            return 1;
        }else{
            //失败
            return 2;
        }
    }
}
