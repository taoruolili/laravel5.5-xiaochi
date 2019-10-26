@extends('Admin.layouts.admin')

{{--定义标题--}}
@section('title','吃光光后台用户列表')

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
                            <button class="btn btn-primary" data-toggle="modal" data-target="#con-close-dal">+添加用户</button>
                        </h3>
                        <div id="errorData">
                            @foreach ($errors->all() as $error)
                                <li style="color:red" >{{  $error }}</li>
                            @endforeach
                        </div>
                    </div>
                    <!-- 添加模态框开始 -->
                    <div id="con-close-dal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 class="modal-title">添加用户</h4>
                                </div>
                                <div class="modal-body">
                                    <form class="form-horizontal" role="form" action="/admin/user" method="post" id="myForm">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label for="firstname" class="col-sm-2 control-label">用户名</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" name="u_name" id="firstname"
                                                       placeholder="请输入用户名">
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label for="u_pwd" class="col-sm-2 control-label">密码</label>
                                            <div class="col-sm-8">
                                                <input type="password" class="form-control" name="u_pwd" id="u_pwd"
                                                       placeholder="请输入密码">
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label for="u_repwd" class="col-sm-2 control-label">重复密码</label>
                                            <div class="col-sm-8">
                                                <input type="password" class="form-control" name="u_repwd" id="u_repwd"
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
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                                            <button class="btn btn-info" >提交</button>
                                            </tr>
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
                                        <th>启用/禁用</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>


                                    <tbody>
                                    @foreach($data as $v)
                                        @if(count($v->id) >0)
                                    <tr>
                                        <td>{{ $v->id }}</td>
                                        <td>{{ $v->u_name }}</td>
                                        @if($sourceData[$v->type] ==1)
                                        <td >{{ $sourceData[$v->type] }}</td>
                                        @else
                                            <td>{{ $sourceData[$v->type] }}</td>
                                            @endif
                                        <td>{{ $v->created_at }}</td>
                                        @if( $v->status == 1 )
                                        <td>
                                            <button type="button" class="btn btn-sm btn-danger m-b-5 jinyong" data-id="{{ $v->id }}">禁用</button>
                                        </td>
                                        @else
                                        <td>
                                            <button type="button" class="btn btn-sm btn-success m-b-5 qiyong" data-id="{{ $v->id }}">启用</button>
                                        </td>
                                        @endif
                                        <td>
                                            <input type="hidden" name="id" value="{{$v->id }}">
                                            <a href="#" class="on-default edit-row" data-id="{{ $v->id }}"><i class="fa fa-pencil" style="color:#29b6f6;"></i></a>
                                            <a class="on-default remove-row delete"><i class="fa fa-trash-o" style="color:red;margin-left:20px; "></i></a>
                                        </td>
                                    </tr>
                                        @else
                                            <p>没有数据</p>
                                        @endif
                                        @endforeach

                                    </tbody>
                                </table>
                                {{ $data->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        <!-- 修改模态框开始 -->
        <div id="con-edit-dal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">修改用户</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal" role="form" action="" method="" id="editForm">
                            {{ csrf_field() }}
                            <input type="hidden" value="" name="" id="uid">
                            <div class="form-group">
                                <label for="editname" class="col-sm-2 control-label">用户名</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" name="u_name" id="editname"
                                           placeholder="请输入用户名">
                                </div>

                            </div>

                            <div class="form-group">
                                <label for="u_pwd" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-8">
                                    <input type="password" class="form-control" name="u_pwd" id="editu_pwd"
                                           placeholder="请输入密码"><p style="color:darkgoldenrod">不需要修改密码不填此项</p>
                                </div>

                            </div>

                            <div class="form-group">
                                <label for="u_repwd" class="col-sm-2 control-label">重复密码</label>
                                <div class="col-sm-8">
                                    <input type="password" class="form-control" name="u_repwd" id="editu_repwd"
                                           placeholder="请重复密码"><p style="color:darkgoldenrod">不需要修改密码不填此项</p>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="lastname" class="col-sm-2 control-label">类型</label>
                                <div class="col-sm-8">
                                    <select class="form-control" name="type" id="edittype">
                                        <option value="">请选择类型</option>
                                        <option value="1">管理员</option>
                                        <option value="2">普通用户</option>

                                    </select>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                                <button type="button" class="btn btn-info" id="editSubmit" >提交</button>
                                {{--<input type="submit" value="提交">--}}
                                </tr>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div><!-- /.modal -->

    </div>
    </div>

@endsection
@section("script")
    <script>
        $(function () {
            //让添加提示错误信息消失
            setTimeout(function(){
                        $("#errorData").hide();
                    },
                    5000);
            //禁用
            $(".jinyong").click(function () {
                //获取点击的id
                var id = ($(this).data('id'));
                swal({
                    title: "您确定要禁用此用户吗？",
                    text: "您确定要禁用此用户？",
                    type: "warning",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    cancelButtonText: "取消",
                    confirmButtonText: "确定禁用",
                    confirmButtonColor: "#ec6c62"
                }, function() {
                    $.ajax({
                        type: "get",
                        url: "/admin/user/jinyong/" + id,
                        data: {'_token': '{{ csrf_token() }}'},
                        success: function (status) {
                            if (status == 1) {

                                window.location.href= "/admin/user"
                            } else {
                                swal('操作失败!');
                                return false;
                            }
                        }

                    })
                });
            })

            //启用
            $(".qiyong").click(function () {
                //获取点击的id
                var id = ($(this).data('id'));
                swal({
                    title: "您确定要启用此用户吗？",
                    text: "您确定要启用此用户？",
                    type: "warning",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    cancelButtonText: "取消",
                    confirmButtonText: "确定启用",
                    confirmButtonColor: "#ec6c62"
                }, function() {
                    $.ajax({
                        type: "get",
                        url: "/admin/user/qiyong/" + id,
                        data: {'_token': '{{ csrf_token() }}'},
                        success: function (status) {
                            if (status == 1) {
                                window.location.href= "/admin/user"
                            } else {
                                swal('操作失败!');
                                return false;
                            }
                        }

                    })
                });
            })

            //添加表单验证
            $('#myForm').validate({

                rules: {
                    //    用户名
                    u_name: {　　//指的是input中的name
                        required: true,

                    },
                    //   密码
                    u_pwd: {
                        required: true,
                        rangelength: [6, 12]
                    },
                    //   重复密码
                    u_repwd: {
                        required: true,
                        rangelength: [6, 12],
                        equalTo: "#u_pwd"
                    },
                    //   类型
                    type: {
                        required: true
                    },
                },

                messages: {
                    //   用户名
                    u_name: {
                        required: '此项必填',

                    },
                    //   密码
                    u_pwd: {
                        required: '此项必填',
                        rangelength: '密码名长度为6-12位'
                    },
                    //   重复密码
                    u_repwd: {
                        required: '此项必填',
                        rangelength: '密码名长度为6-12位',
                        equalTo:'两次密码不一致'
                    },
                    //   类型
                    type:{
                        required: '此项必填'
                    }
                },

            })
            //修改表单验证
            $('#editForm').validate({

                rules: {
                    //    用户名
                    u_name: {　　//指的是input中的name
                        required: true,

                    },
                    //   密码
                    u_pwd: {
                        rangelength: [6, 12]
                    },
                    //   重复密码
                    u_repwd: {
                        rangelength: [6, 12],
                        equalTo: "#editu_pwd"
                    },
                    //   类型
                    type: {
                        required: true
                    },
                },

                messages: {
                    //   用户名
                    u_name: {
                        required: '此项必填',

                    },
                    //   密码
                    u_pwd: {
                        rangelength: '密码名长度为6-12位'
                    },
                    //   重复密码
                    u_repwd: {
                        rangelength: '密码名长度为6-12位',
                        equalTo:'两次密码不一致'
                    },
                    //   类型
                    type:{
                        required: '此项必填'
                    }
                },

            })

            //检查用户名是否存在
            $("#firstname").blur(function () {
                var obj = $(this);
                $.ajax({
                    type: "GET",
                    url: "/admin/usernouser/",
                    data: {'u_name':obj.val()},
                    success: function (status) {
                        if (status == "1") {
                            swal('此用户名已存在,请重新输入！');
                            return false;

                        }
                    }

                })
            })
            //删除
            $(".delete").click(function () {
                var obj = $(this);
                swal({
                    title: "您确定要删除吗？",
                    text: "您确定要删除这条数据？",
                    type: "warning",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    cancelButtonText: "取消",
                    confirmButtonText: "确定删除",
                    confirmButtonColor: "#ec6c62"
                }, function() {
                    $.ajax({
                        type: "DELETE",
                        url: "/admin/user/" + obj.parent().find("input").val(),
                        data: {'_token': '{{ csrf_token() }}'},
                        success: function (status) {
                            if (status == "1") {
                                swal('操作成功!');
                                window.location.href= "/admin/user"
                            } else {
                                swal('操作失败!');
                                return false;
                            }
                        }

                    })
                });
            })

            //修改
            $(".edit-row").click(function(){
                var _this = $(this);
                var id    = _this.data('id');
                $.ajax({
                    type: "get",
                    url: "/admin/user/" + id,
                    success: function (data) {

                            //将数据插入模态框中
                            $('#con-edit-dal').find("#editname").val(data.u_name);
                            $('#con-edit-dal').find("#edittype").val(data.type);
                            $('#con-edit-dal').find("#uid").val(data.id);

                    }

                })
                //显示模态框
                $('#con-edit-dal').modal('show');

            })
            //提交修改
            $("#editSubmit").click(function () {
//                var form = $('#editForm').serializeArray();
//                var  formData = new FormData(form);
                //获取要修改数据id
                var uid = $("#uid").val();

                $.ajax({
                    type: "PUT",
                    url: "/admin/user/"+uid,
                    data: {'u_name':$("#editname").val(),'u_pwd':$("#editu_pwd").val(),'u_repwd':$("#editu_repwd").val(),'type':$("#edittype").val(),'_token': '{{ csrf_token() }}'},
                    success: function (status) {
                        if (status == "1") {
                            swal('操作成功!');
                            window.location.href= "/admin/user"
                        } else {
                            swal('操作失败!');
                            return false;
                        }
                    }

                })
            })
        })


    </script>
@endsection







