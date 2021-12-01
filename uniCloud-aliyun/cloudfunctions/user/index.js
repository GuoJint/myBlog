'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = db.collection('user').add({
		"username": event.username,
		"userpsw": event.password,
		"user_school": event.user_school,
		"user_type": event.user_type,
		"user_number": event.user_number,
		"classes": event.classes
	})
	
	//返回数据给客户端
	return res
};
