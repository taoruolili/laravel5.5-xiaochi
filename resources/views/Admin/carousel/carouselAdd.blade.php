@extends('Admin.layouts.admin')

{{--定义标题--}}
@section('title','吃光光后台添加轮播图')

{{--内容部分--}}
@section('content')
    <div class="wraper container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">添加轮播图</h3></div>
                    <div class="panel-body">
                        <div class=" form p-20">
                            <form class="cmxform form-horizontal tasi-form" id="commentForm" action="/admin/carousel" method="post" novalidate="novalidate" enctype="multipart/form-data">
                                {{ csrf_field() }}
                                <div class="form-group ">
                                    <label for="curl" class="control-label col-lg-2">轮播图片</label>
                                    <div class="col-lg-6">
                                        <input  id="file_upload" name="img" type="file" multiple="true">
                                        <button type="button" id="upload">预览</button>
                                        <p><img id="img1" alt="上传后显示图片"  src={{ asset("/Admin/images/4.jpg") }} style="width:200px;height:100px;border:1px" /></p>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <label for="cemail" class="control-label col-lg-2">轮播图描述</label>
                                    <div class="col-lg-6">
                                        <input class="form-control " id="cemail" type="text" name="email" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="lastname" class="col-sm-2 control-label">是否显示</label>
                                    <div class="col-sm-6">
                                        <select class="form-control" name="status" >
                                            <option value="1">是</option>
                                            <option value="2">否</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-lg-offset-6 col-lg-4">
                                        <button class="btn btn-success" type="submit">提交</button>
                                        <button class="btn btn-default" type="button">取消</button>
                                    </div>
                                </div>
                            </form>
                        </div> <!-- .form -->
                    </div> <!-- panel-body -->
                </div> <!-- panel -->
            </div> <!-- col -->
    </div>
    </div>
@endsection
@section("script")
    <script>
        $(function () {
            $("#upload").click(function () {
//                var a = $("#file_upload").val();
                //获取上传文件信息
                var obj =$("#file_upload")[0].files[0];
                var fr=new FileReader();
                fr.onload=function () {
                    $("#img1").attr('src',this.result);
                    $("#file_upload").val(this.result);
                };
                fr.readAsDataURL(obj);
            })
        })
    </script>
@endsection    