new Vue({
	el:"#app-vue",
	data:{
		name:"1234567878",
		time:"晚安"
	},
	methods:{
		greet:function(name){
			return "hi"+"!"+name+this.time;
		}
	}

});