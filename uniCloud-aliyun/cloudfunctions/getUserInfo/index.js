'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const db = uniCloud.database()
	const dbcmd = db.command
	const res =await db.collection("user")
	.where({
		user_number: dbcmd.eq(event.user_number),
	})
	.get()
	if (res.data.length > 0) {
		if (res.data[0].userpsw == event.password) {
			return {
				"status": true,
				"data": res.data[0],
				"msg": "ok"
			}
		} else {
			return {
				"status": false,
				"msg": "密码错误！"
			}
		}
	} else {
		return {
			"status": false,
			"msg": '该学号不存在！'
		}
	}
	//返回数据给客户端
	
};
