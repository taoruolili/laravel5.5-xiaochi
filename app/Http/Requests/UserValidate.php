<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class UserValidate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'u_name' => 'required|unique',
            'u_pwd' => 'required|min:6',
            'u_repwd' => 'required|min:6',
            'type' => 'required'
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'u_name.required'      => '用户名不能空!',
            'u_pwd.required'      => '密码不能为空!',
            'type.required'      =>'用户类型不能为空',
            'u_repwd.required' => '确认密码不能空!',
            'u_pwd.min' => '密码不可以小于6位',
            'u_repwd.min' => '确认密码不可以小于6位!',
        ];
    }
}
