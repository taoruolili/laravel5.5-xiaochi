@extends('Admin.layouts.admin')

{{--定义标题--}}
@section('title','吃光光后台友情链接列表')

{{--内容部分--}}
@section('content')
    <div class="wraper container-fluid">
        <div class="page-title">
            <h3 class="title">友情链接列表</h3>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#con-close-dal">+添加友情链接</button>
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
                                    <h4 class="modal-title">添加友情链接</h4>
                                </div>
                                <div class="modal-body">
                                    <form class="form-horizontal" role="form" action="/admin/friendlink" method="post" id="myForm">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label for="firstname" class="col-sm-2 control-label">链接名</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" name="name" id="firstname"
                                                       placeholder="请输入链接名">
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label for="url" class="col-sm-2 control-label">URL地址</label>
                                            <div class="col-sm-8">
                                                <input type="url" class="form-control" name="url" id="url"
                                                       placeholder="请输入URL地址">
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label for="lastname" class="col-sm-2 control-label">是否显示</label>
                                            <div class="col-sm-8">
                                                <select class="form-control" name="status" >
                                                    <option value="1">是</option>
                                                    <option value="2">否</option>

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
                                        <th>URL地址</th>
                                        <th>是否显示</th>
                                        <th>添加时间</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>


                                    <tbody>
                                    @foreach($data as $v)
                                        @if(count($v->id) >0)
                                            <tr>
                                                <td>{{ $v->id }}</td>
                                                <td>{{ $v->name }}</td>
                                                <td>{{ $v->url }}</td>
                                                @if($v->status ==1)
                                                    <td>是</td>
                                                @else
                                                    <td>否</td>
                                                @endif
                                                <td>{{ $v->created_at }}</td>
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
                                {{--{{ $data->links() }}--}}
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
                                    <label for="firstname" class="col-sm-2 control-label">链接名</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" name="name" id="editname"
                                               placeholder="请输入链接名">
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label for="url" class="col-sm-2 control-label">URL地址</label>
                                    <div class="col-sm-8">
                                        <input type="url" class="form-control" name="url" id="editurl"
                                               placeholder="请输入URL地址">
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label for="lastname" class="col-sm-2 control-label">是否显示</label>
                                    <div class="col-sm-8">
                                        <select class="form-control" name="status" id="editstatus">

                                            <option value="1">是</option>
                                            <option value="2">否</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                                    <button type="button" class="btn btn-info" id="editSubmit">提交</button>
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

            //添加表单验证
            $('#myForm').validate({

                rules: {
                    //    用户名
                    name: {　　//指的是input中的name
                        required: true,

                    },
                    //url
                    url:{
                        required: true,
                        url: true,
                    },
                    //   类型
                    status: {
                        required: true
                    },
                },

                messages: {
                    //   用户名
                    name: {
                        required: '此项必填',

                    },
                    //url
                    url:{
                        required: '此项必填',
                        url: '请填写完整的url地址',
                    },
                    //   类型
                    status:{
                        required: '此项必填'
                    }
                },

            })
            //修改表单验证
            $('#editForm').validate({
                rules: {
                    //    用户名
                    name: {　　//指的是input中的name
                        required: true,

                    },
                    //url
                    url:{
                        required: true,
                        url: true,
                    },
                    //   类型
                    status: {
                        required: true
                    },
                },

                messages: {
                    //   用户名
                    name: {
                        required: '此项必填',

                    },
                    //url
                    url:{
                        required: '此项必填',
                        url: '请填写完整的url地址',
                    },
                    //   类型
                    status:{
                        required: '此项必填'
                    }
                },

            })

            //检查用户名是否存在
            $("#firstname").blur(function () {
                var obj = $(this);
                $.ajax({
                    type: "GET",
                    url: "/admin/noFriendlink/",
                    data: {'name':obj.val()},
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
                        url: "/admin/friendlink/" + obj.parent().find("input").val(),
                        data: {'_token': '{{ csrf_token() }}'},
                        success: function (status) {
                            if (status == "1") {
                                swal('操作成功!');
                                window.location.href= "/admin/friendlink"
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
                    url: "/admin/friendlink/" + id,
                    success: function (data) {
                        console.log(data)
                        //将数据插入模态框中
                        $('#con-edit-dal').find("#editname").val(data.name);
                        $('#con-edit-dal').find("#editurl").val(data.url);
                        $('#con-edit-dal').find("#editstatus").val(data.status);
                        $('#con-edit-dal').find("#uid").val(data.id);

                    }

                })
                //显示模态框
                $('#con-edit-dal').modal('show');

            })
            //提交修改
            $("#editSubmit").click(function () {
                //获取form表单中数据
                var form = $('#editForm').serializeArray();
                //获取要修改数据id
                var uid = $("#uid").val();
                $.ajax({
                    type: "PUT",
                    url: "/admin/friendlink/"+uid,
                    data: form,
                    success: function (status) {
                        if (status == "1") {
                            swal('操作成功!');
                            window.location.href= "/admin/friendlink"
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







