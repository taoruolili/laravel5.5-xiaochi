@extends('Admin.layouts.admin')

{{--定义标题--}}
@section('title','吃光光后台分类列表')

{{--内容部分--}}
@section('content')
    <div class="wraper container-fluid">
        <div class="page-title">
            <h3 class="title">分类列表</h3>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">

                    </div>

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
                                        <th>备注</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    <tr>
                                        <td>111</td>
                                        <td>111</td>
                                        <td>111</td>
                                        <td>111</td>
                                        <td>111</td>
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

