// path.js
//网络请求路径放在这个文件
const base = {
    baseUrl:"/api",
    //获取验证码
    getCode:"/tanzu/user/vercode",
    //登录
    logIn:"/tanzu/user/login",
    //注册
    regist:"/tanzu/user/register",
    //提交运动记录
    pushRecord:"/tanzu/history/history",
    //历史记录
    getHois:"/tanzu/history/histories/",
    //获取课程视频
    getCourse:"/tanzu/course/courses",
    //或缺课程对应信息
    getInfo:"/tanzu/course/courses/",
    //提交留言
    pushmessge:"/tanzu/message/add/",
//获取留言

    getmessge:"tanzu/message/",
    putUser:"/tanzu/user/",
    getUserinfo:"/tanzu/user/"
}
export default base
