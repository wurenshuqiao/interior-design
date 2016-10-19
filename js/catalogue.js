// JavaScript Document
window.onload=function(){
	var odiv=document.getElementById('page');
	var bigul=odiv.getElementsByTagName('ul')[0];
	var bigli=bigul.getElementsByTagName('li');
	var ool=odiv.getElementsByTagName('ol')[0];
	var oa=ool.getElementsByTagName('a');
	var num=0;
	for(var i=0;i<oa.length;i++){
		oa[i].xxx=i;
		oa[i].onmouseover=function(){
			num=this.xxx;
			tab();
		};	
	}
	function tab(){
		for(var i=0;i<oa.length;i++){
				oa[i].className='';
				bigli[i].style.opacity=0;
				bigli[i].style.filter="alpha(opacity=0)";
				
			}
		oa[num].className='active';
		bigli[num].style.opacity=1;
		bigli[num].style.filter="alpha(opacity=100)";
	}
	
};
function geton(){
	alert( "随着人们生活的提高，家庭装修已经成为家喻户晓的热门话题，这一现象的出现，及是经济发展与生活提高的必然结果。但如何才能装修好自己的家，却存在着不完全相同的看法，也就是平常说的观念存在着差异，应该认为这是正常的现象。然而其中有一个问题则需要弄清楚，即要想搞好家庭装修，在施工之前是离不开良好设计创意的，犹如画家在作画之前强调“意在笔先”是同一个道理，否则就会产生乱点鸳鸯谱而作不好画。同样，若没有清晰的意图，就盲目地进行家庭进修，也是难以获得良好的效果，往往还会酿成花了不少钱，却买了个俗不可耐的结局，令人感到得不偿失和啼笑皆非。产生这类恶果，固然原因很多，其中有一个原因是通常被遗忘的，那就是用户考虑家装时“实”处考虑的多，而“虚”处考虑的少，甚至于缺乏考虑。例如：地面铺设石材还木材、墙壁贴壁纸还是涂料、天花是吊顶棚还是做灯池、家具选择大的还是小的、顶部灯具是吊花灯还是装格栅灯等一系列看得见摸得着实而又实的问题。诚然，上述这些具体的问题不是不应该考虑，但它们都是漂浮在家庭装修中表面上的东西，问题在于把这些建筑装修材料堆积在一起，欲取得什么样的装修效果，常常有欠研究，也步是没有在感觉得到而又看不到的内涵“虚”字上做文章，例如追求典雅大方、朴实无华、返朴归真、民族风韵、现代气息等，皆是家庭装修中至关重要的创意上的问题。");
}


