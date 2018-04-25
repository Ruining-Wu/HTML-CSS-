//------2018.4.25 panda.tv面试-------------
//js部分：
//1.将获取到的日期返回成“yyyy-mm-dd”的形式
function formatDate(){
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var strDate = date.getDate();
	if(month>=1 && month<=9){
		month = "0" + month;
	}
	if(strDate >= 0 && strDate <=9){
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}
//2.bootstrap框架中时间空间的样式怎么写
//3.数组去重
//3.1 先用sort方法进行分类
function unique(arr){
	var newsz = [];
	arr = arr.sort();
	for(var i = 0; i < arr.length; i ++){
		if(arr[i] != newsz[newsz.length-1]){
			newsz.push(arr[i])
		}
	}
	return newsz;
}
//3.2 用es6的set对象
function unique(arr){
	var set = new Set(arr);
	var newsz = Array.from(set);
	console.log(newsz);
}
//3.3利用数组中的元素i首次出现的位置与i相比较，若不相等，则把此位删除
function unique(arr){
	for(var i = 0;i<arr.length;i++){
		if(arr.indexOf(arr[i])!=i){
			arr.splice(i,1);
			i--;
		}
	}
	return arr;
}
//3.4利用数组中的filter方法。过滤器方法对数组中的每一个元素进行操作，返回满足filter中函数的数组项
function unique(arr){
	var newsz = arr.filter(function(element,index,self){
		return self.indexOf(element) == index;
	});
	return newsz;
}
