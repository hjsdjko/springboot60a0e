
var projectName = '教学资源库系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '考试记录',
	url: '../examrecord/list.html'
}, 
{
	name: '错题本',
	url: '../examrecord/wrong.html'
},
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '课程信息',
	url: './pages/kechengxinxi/list.html'
}, 
{
	name: '课程作业',
	url: './pages/kechengzuoye/list.html'
}, 

{
	name: '试卷列表',
	url: './pages/exampaper/list.html'
}, 
{
	name: '公告信息',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot60a0e/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"课程作业","menuJump":"列表","tableName":"kechengzuoye"}],"menu":"课程作业管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"学生选课","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"学生作业","menuJump":"列表","tableName":"xueshengzuoye"}],"menu":"学生作业管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","学生选课"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看","学生作业","提交作业"],"menu":"课程作业列表","menuJump":"列表","tableName":"kechengzuoye"}],"menu":"课程作业模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论","添加作业"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"课程作业","menuJump":"列表","tableName":"kechengzuoye"}],"menu":"课程作业管理"},{"child":[{"buttons":["查看","审核"],"menu":"学生选课","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课管理"},{"child":[{"buttons":["查看","审核","添加成绩"],"menu":"学生作业","menuJump":"列表","tableName":"xueshengzuoye"}],"menu":"学生作业管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试卷管理","tableName":"exampaper"}],"menu":"试卷管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"试题管理","tableName":"examquestion"}],"menu":"试题管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"考试记录","tableName":"examrecord"},{"buttons":["新增","查看","修改","删除"],"menu":"错题本","tableName":"examfailrecord"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"buttons":["查看","学生选课"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看","学生作业","提交作业"],"menu":"课程作业列表","menuJump":"列表","tableName":"kechengzuoye"}],"menu":"课程作业模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"},{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"学生选课","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"学生作业","menuJump":"列表","tableName":"xueshengzuoye"}],"menu":"学生作业管理"},{"child":[{"buttons":["查看"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","学生选课"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看","学生作业","提交作业"],"menu":"课程作业列表","menuJump":"列表","tableName":"kechengzuoye"}],"menu":"课程作业模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
