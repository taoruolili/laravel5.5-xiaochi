@extends('Admin.layouts.admin')

{{--定义标题--}}
@section('title','吃光光后台商品列表')

{{--内容部分--}}
@section('content')
    <div class="wraper container-fluid">
        <div class="page-title">
            <h3 class="title">用户列表</h3>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#con-close-dal">+添加商品</button>
                        </h3>

                    </div>
                    <!-- 模态框开始 -->
                    <div id="con-close-dal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 class="modal-title">添加商品</h4>
                                </div>
                                <div class="modal-body">
                                    <form class="form-horizontal" role="form" action="user" method="post" id="myForm">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label for="firstname" class="col-sm-2 control-label">用户名</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" name="u_name" id="firstname"
                                                       placeholder="请输入用户名">
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label for="firstname" class="col-sm-2 control-label">密码</label>
                                            <div class="col-sm-8">
                                                <input type="password" class="form-control" name="u_pwd" id="password"
                                                       placeholder="请输入密码">
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label for="firstname" class="col-sm-2 control-label">重复密码</label>
                                            <div class="col-sm-8">
                                                <input type="password" class="form-control" name="u_repwd" id="repassword"
                                                       placeholder="请重复密码">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="lastname" class="col-sm-2 control-label">类型</label>
                                            <div class="col-sm-8">
                                                <select class="form-control" name="type" >
                                                    <option value="">请选择类型</option>
                                                    <option value="1">管理员</option>
                                                    <option value="2">普通用户</option>

                                                </select>
                                            </div>
                                        </div>
                                        {{--<div class="form-group">--}}
                                            {{--<label for="lastname" class="col-sm-2 control-label">备注</label>--}}
                                            {{--<div class="col-sm-8">--}}
                                                {{--<textarea class="col-sm-8 form-control autogrow" id="field-7" placeholder="Write something about yourself" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;">                                       </textarea>--}}
                                            {{--</div>--}}
                                        {{--</div>--}}
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                                            <input style="width: 80px;height:32px;background:indigo;" type="submit" name="" value="提交">
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div><!-- /.modal -->


                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <table id="datatable" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>序列</th>
                                        <th>用户名</th>
                                        <th>类型</th>
                                        <th>注册时间</th>
                                        {{--<th>备注</th>--}}
                                        <th>操作</th>
                                    </tr>
                                    </thead>


                                    <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        {{--<td>{{ $v['u_pwd'] }}</td>--}}
                                        <td>3</td>
                                        <td>4</td>
                                        <td>
                                            <a href="#" class="on-default edit-row"><i class="fa fa-pencil" style="color:#29b6f6;"></i></a>
                                            <a href="#" class="on-default remove-row"><i class="fa fa-trash-o" style="color:red;margin-left:20px; "></i></a>
                                        </td>
                                    </tr>



                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> <!-- End Row -->

    </div>

@endsection





