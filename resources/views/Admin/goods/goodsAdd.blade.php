@extends('Admin.layouts.admin')

{{--定义标题--}}
@section('title','吃光光后台添加商品')

{{--内容部分--}}
@section('content')
    <div class="wraper container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title">添加商品</h3></div>
                    <div class="panel-body">
                        <div class=" form p-20">
                            <form class="cmxform form-horizontal tasi-form" id="commentForm" method="get" action="#" novalidate="novalidate">
                                <div class="form-group">
                                    <label for="lastname" class="col-sm-2 control-label">商品分类</label>
                                    <div class="col-lg-8">
                                        <select class="form-control" name="type" >
                                            <option value="">请选择分类</option>
                                            <option value="1">顶级分类</option>
                                            <option value="2">111</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <label for="cemail" class="control-label col-lg-2">商品名称</label>
                                    <div class="col-lg-8">
                                        <input class="form-control " id="cemail" type="text" name="email" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <label for="ccomment" class="control-label col-lg-2">商品描述</label>
                                    <div class="col-lg-8">
                                        <textarea class="form-control " id="ccomment" name="comment" required="" aria-required="true"></textarea>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <label for="curl" class="control-label col-lg-2">商品图片</label>
                                    <div class="col-lg-8">
                                        <input class="form-control " id="curl" type="file" name="url">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-offset-8 col-lg-4">
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