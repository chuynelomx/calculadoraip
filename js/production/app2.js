var app=angular.module("app",["ui.bootstrap"]);app.controller("CalculatorController",["$scope","$uibModal","$log","$document",function(i,_,e,s){var n=this;n.items=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32"],n.animationsEnabled=!0,i.open_pc=1,n.open=function(e,b,a){i.open_pc=b;var m=a?angular.element(s[0].querySelector(".modal-demo "+a)):void 0;_.open({animation:n.animationsEnabled,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"myModalContent.html",controller:"ModalInstanceCtrl",controllerAs:"$ctrl",size:e,appendTo:m,resolve:{items:function(){return n.items}}}).result.then(function(_){n.selected=_,1==i.open_pc?i.generateCIDR(_):i.zgenerateCIDR(_)},function(){})},i.mask="0",i.base="0",i.ip_1=0,i.ip_2=0,i.ip_3=0,i.ip_4=0,i.ms_1=0,i.ms_2=0,i.ms_3=0,i.ms_4=0,i.zip_1=0,i.zip_2=0,i.zip_3=0,i.zip_4=0,i.zms_1=0,i.zms_2=0,i.zms_3=0,i.zms_4=0,i.ip_1_b="00000000",i.ip_2_b="00000000",i.ip_3_b="00000000",i.ip_4_b="00000000",i.ms_1_b="00000000",i.ms_2_b="00000000",i.ms_3_b="00000000",i.ms_4_b="00000000",i.zip_1_b="00000000",i.zip_2_b="00000000",i.zip_3_b="00000000",i.zip_4_b="00000000",i.zms_1_b="00000000",i.zms_2_b="00000000",i.zms_3_b="00000000",i.zms_4_b="00000000",i.networkId=0,i.hostId=0,i.znetworkId=0,i.zhostId=0,i.conclusion="",i.data={availableOptions:[{id:"1",name:"Clase A"},{id:"2",name:"Clase B"},{id:"3",name:"Clase C"}],selectedOption:{id:"1",name:"Clase A"}},i.zdata={availableOptions:[{id:"1",name:"Clase A"},{id:"2",name:"Clase B"},{id:"3",name:"Clase C"}],selectedOption:{id:"1",name:"Clase A"}},i.dec2bin=function(i){return(i>>>0).toString(2)},i.bin2dec=function(i){return parseInt(i,2)},i.fixDecimal=function(_,e,s){var n="0";if(void 0==_)return"0";if(0==i.mask&&1==e&&1==s){if(1==i.data.selectedOption.id){if(_<1)return 1;if(_>126)return 126}if(2==i.data.selectedOption.id){if(_<128)return 128;if(_>191)return 191}if(3==i.data.selectedOption.id){if(_<192)return 192;if(_>223)return 223}}else if(0==i.mask&&1==e&&2==s){if(1==i.zdata.selectedOption.id){if(_<1)return 1;if(_>126)return 126}if(2==i.zdata.selectedOption.id){if(_<128)return 128;if(_>191)return 191}if(3==i.zdata.selectedOption.id){if(_<192)return 192;if(_>223)return 223}}else if(_>255&&0==e||1==i.mask&&_>255)return 255;return n.substring(0,n.length-_.length)+_},i.fixBinary=function(_,e,s){var n="00000000";if(void 0==_)return n;var b=i.bin2dec(_);if(0==i.mask&&1==e&&1==s)1==i.data.selectedOption.id&&(b<1&&(_=i.dec2bin(1)),b>126&&(_=i.dec2bin(126))),2==i.data.selectedOption.id&&(b<128&&(_=i.dec2bin(128)),b>191&&(_=i.dec2bin(191))),3==i.data.selectedOption.id&&(b<192&&(_=i.dec2bin(192)),b>223&&(_=i.dec2bin(223)));else if(0==i.mask&&1==e&&2==s)1==i.zdata.selectedOption.id&&(b<1&&(_=i.dec2bin(1)),b>126&&(_=i.dec2bin(126))),2==i.zdata.selectedOption.id&&(b<128&&(_=i.dec2bin(128)),b>191&&(_=i.dec2bin(191))),3==i.zdata.selectedOption.id&&(b<192&&(_=i.dec2bin(192)),b>223&&(_=i.dec2bin(223)));else if(b>255&&0==e||1==i.mask&&b>255)return"11111111";return n.substring(0,n.length-_.length)+_},i.baseChange=function(_){1==_&&(i.ip_1_b=i.fixBinary(i.dec2bin(i.ip_1),!0,1),i.ip_2_b=i.fixBinary(i.dec2bin(i.ip_2),!1,1),i.ip_3_b=i.fixBinary(i.dec2bin(i.ip_3),!1,1),i.ip_4_b=i.fixBinary(i.dec2bin(i.ip_4),!1,1),i.ms_1_b=i.fixBinary(i.dec2bin(i.ms_1),!1,1),i.ms_2_b=i.fixBinary(i.dec2bin(i.ms_2),!1,1),i.ms_3_b=i.fixBinary(i.dec2bin(i.ms_3),!1,1),i.ms_4_b=i.fixBinary(i.dec2bin(i.ms_4),!1,1),i.zip_1_b=i.fixBinary(i.dec2bin(i.zip_1),!0,2),i.zip_2_b=i.fixBinary(i.dec2bin(i.zip_2),!1,2),i.zip_3_b=i.fixBinary(i.dec2bin(i.zip_3),!1,2),i.zip_4_b=i.fixBinary(i.dec2bin(i.zip_4),!1,2),i.zms_1_b=i.fixBinary(i.dec2bin(i.zms_1),!1,2),i.zms_2_b=i.fixBinary(i.dec2bin(i.zms_2),!1,2),i.zms_3_b=i.fixBinary(i.dec2bin(i.zms_3),!1,2),i.zms_4_b=i.fixBinary(i.dec2bin(i.zms_4),!1,2)),0==_&&(i.ip_1=i.bin2dec(i.ip_1_b),i.ip_2=i.bin2dec(i.ip_2_b),i.ip_3=i.bin2dec(i.ip_3_b),i.ip_4=i.bin2dec(i.ip_4_b),i.ms_1=i.bin2dec(i.ms_1_b),i.ms_2=i.bin2dec(i.ms_2_b),i.ms_3=i.bin2dec(i.ms_3_b),i.ms_4=i.bin2dec(i.ms_4_b),i.zip_1=i.bin2dec(i.zip_1_b),i.zip_2=i.bin2dec(i.zip_2_b),i.zip_3=i.bin2dec(i.zip_3_b),i.zip_4=i.bin2dec(i.zip_4_b),i.zms_1=i.bin2dec(i.zms_1_b),i.zms_2=i.bin2dec(i.zms_2_b),i.zms_3=i.bin2dec(i.zms_3_b),i.zms_4=i.bin2dec(i.zms_4_b))},i.selected_class=function(){i.ip_1=i.fixDecimal(i.ip_1,!0,1),i.ip_1_b=i.fixBinary(i.ip_1_b,!0,1),1==i.data.selectedOption.id&&(i.ms_4=0,i.ms_4_b="00000000",i.ms_3=0,i.ms_3_b="00000000",i.ms_2=0,i.ms_2_b="00000000",i.ms_1=255,i.ms_1_b="11111111"),2==i.data.selectedOption.id&&(i.ms_4=0,i.ms_4_b="00000000",i.ms_3=0,i.ms_3_b="00000000",i.ms_2=255,i.ms_2_b="11111111",i.ms_1=255,i.ms_1_b="11111111"),3==i.data.selectedOption.id&&(i.ms_4=0,i.ms_4_b="00000000",i.ms_3=255,i.ms_3_b="11111111",i.ms_2=255,i.ms_2_b="11111111",i.ms_1=255,i.ms_1_b="11111111")},i.zselected_class=function(){i.zip_1=i.fixDecimal(i.zip_1,!0,2),i.zip_1_b=i.fixBinary(i.zip_1_b,!0,2),1==i.zdata.selectedOption.id&&(i.zms_4=0,i.zms_4_b="00000000",i.zms_3=0,i.zms_3_b="00000000",i.zms_2=0,i.zms_2_b="00000000",i.zms_1=255,i.zms_1_b="11111111"),2==i.zdata.selectedOption.id&&(i.zms_4=0,i.zms_4_b="00000000",i.zms_3=0,i.zms_3_b="00000000",i.zms_2=255,i.zms_2_b="11111111",i.zms_1=255,i.zms_1_b="11111111"),3==i.zdata.selectedOption.id&&(i.zms_4=0,i.zms_4_b="00000000",i.zms_3=255,i.zms_3_b="11111111",i.zms_2=255,i.zms_2_b="11111111",i.zms_1=255,i.zms_1_b="11111111")},i.selected_class(),i.zselected_class(),i.maskChange=function(){0==i.mask&&(i.selected_class(),i.zselected_class())},i.blur=function(_){switch(pad="00000000",_){case"ip_1_b":i.ip_1_b=i.fixBinary(i.ip_1_b,!0,1);break;case"ip_2_b":i.ip_2_b=i.fixBinary(i.ip_2_b,!1,1);break;case"ip_3_b":i.ip_3_b=i.fixBinary(i.ip_3_b,!1,1);break;case"ip_4_b":i.ip_4_b=i.fixBinary(i.ip_4_b,!1,1);break;case"ms_1_b":i.ms_1_b=i.fixBinary(i.ms_1_b,!1,1);break;case"ms_2_b":i.ms_2_b=i.fixBinary(i.ms_2_b,!1,1);break;case"ms_3_b":i.ms_3_b=i.fixBinary(i.ms_3_b,!1,1);break;case"ms_4_b":i.ms_4_b=i.fixBinary(i.ms_4_b,!1,1);break;case"zip_1_b":i.zip_1_b=i.fixBinary(i.zip_1_b,!0,2);break;case"zip_2_b":i.zip_2_b=i.fixBinary(i.zip_2_b,!1,2);break;case"zip_3_b":i.zip_3_b=i.fixBinary(i.zip_3_b,!1,2);break;case"zip_4_b":i.zip_4_b=i.fixBinary(i.zip_4_b,!1,2);break;case"zms_1_b":i.zms_1_b=i.fixBinary(i.zms_1_b,!1,2);break;case"zms_2_b":i.zms_2_b=i.fixBinary(i.zms_2_b,!1,2);break;case"zms_3_b":i.zms_3_b=i.fixBinary(i.zms_3_b,!1,2);break;case"zms_4_b":i.zms_4_b=i.fixBinary(i.zms_4_b,!1,2)}},i.blur_d=function(_){switch(_){case"ip_1":i.ip_1=i.fixDecimal(i.ip_1,!0,1);break;case"ip_2":i.ip_2=i.fixDecimal(i.ip_2,!1,1);break;case"ip_3":i.ip_3=i.fixDecimal(i.ip_3,!1,1);break;case"ip_4":i.ip_4=i.fixDecimal(i.ip_4,!1,1);break;case"ms_1":i.ms_1=i.fixDecimal(i.ms_1,!1,1);break;case"ms_2":i.ms_2=i.fixDecimal(i.ms_2,!1,1);break;case"ms_3":i.ms_3=i.fixDecimal(i.ms_3,!1,1);break;case"ms_4":i.ms_4=i.fixDecimal(i.ms_4,!1,1);break;case"zip_1":i.zip_1=i.fixDecimal(i.zip_1,!0,2);break;case"zip_2":i.zip_2=i.fixDecimal(i.zip_2,!1,2);break;case"zip_3":i.zip_3=i.fixDecimal(i.zip_3,!1,2);break;case"zip_4":i.zip_4=i.fixDecimal(i.zip_4,!1,2);break;case"zms_1":i.zms_1=i.fixDecimal(i.zms_1,!1,2);break;case"zms_2":i.zms_2=i.fixDecimal(i.zms_2,!1,2);break;case"zms_3":i.zms_3=i.fixDecimal(i.zms_3,!1,2);break;case"zms_4":i.zms_4=i.fixDecimal(i.zms_4,!1,2)}},i.getBinaries=function(){i.ip_1_b=i.fixBinary(i.dec2bin(i.ip_1),!0,1),i.ip_2_b=i.fixBinary(i.dec2bin(i.ip_2),!1,1),i.ip_3_b=i.fixBinary(i.dec2bin(i.ip_3),!1,1),i.ip_4_b=i.fixBinary(i.dec2bin(i.ip_4),!1,1),i.ms_1_b=i.fixBinary(i.dec2bin(i.ms_1),!1,1),i.ms_2_b=i.fixBinary(i.dec2bin(i.ms_2),!1,1),i.ms_3_b=i.fixBinary(i.dec2bin(i.ms_3),!1,1),i.ms_4_b=i.fixBinary(i.dec2bin(i.ms_4),!1,1),i.zip_1_b=i.fixBinary(i.dec2bin(i.zip_1),!0,2),i.zip_2_b=i.fixBinary(i.dec2bin(i.zip_2),!1,2),i.zip_3_b=i.fixBinary(i.dec2bin(i.zip_3),!1,2),i.zip_4_b=i.fixBinary(i.dec2bin(i.zip_4),!1,2),i.zms_1_b=i.fixBinary(i.dec2bin(i.zms_1),!1,2),i.zms_2_b=i.fixBinary(i.dec2bin(i.zms_2),!1,2),i.zms_3_b=i.fixBinary(i.dec2bin(i.zms_3),!1,2),i.zms_4_b=i.fixBinary(i.dec2bin(i.zms_4),!1,2)},i.getDecimals=function(){i.ip_1=i.bin2dec(i.ip_1_b),i.ip_2=i.bin2dec(i.ip_2_b),i.ip_3=i.bin2dec(i.ip_3_b),i.ip_4=i.bin2dec(i.ip_4_b),i.ms_1=i.bin2dec(i.ms_1_b),i.ms_2=i.bin2dec(i.ms_2_b),i.ms_3=i.bin2dec(i.ms_3_b),i.ms_4=i.bin2dec(i.ms_4_b),i.zip_1=i.bin2dec(i.zip_1_b),i.zip_2=i.bin2dec(i.zip_2_b),i.zip_3=i.bin2dec(i.zip_3_b),i.zip_4=i.bin2dec(i.zip_4_b),i.zms_1=i.bin2dec(i.zms_1_b),i.zms_2=i.bin2dec(i.zms_2_b),i.zms_3=i.bin2dec(i.zms_3_b),i.zms_4=i.bin2dec(i.zms_4_b)},i.calculate=function(){0==i.base&&i.getBinaries(),1==i.base&&i.getDecimals();for(var _=0,e=!0,s=0,n=0,b=i.ms_1_b+i.ms_2_b+i.ms_3_b+i.ms_4_b,a=0,m=b.length;a<m;a++)0==_&&"0"==b[a]&&(_=1),1==_&&"1"==b[a]&&(e=!1),"1"==b[a]&&s++;var t=i.zms_1_b+i.zms_2_b+i.zms_3_b+i.zms_4_b;_=0;for(var a=0,m=t.length;a<m;a++)0==_&&"0"==t[a]&&(_=1),1==_&&"1"==t[a]&&(e=!1),"1"==b[a]&&n++;if(!e)return void alert("Máscara de subred incorrecta");var c=32-s;if(0==i.mask&&(1==i.data.selectedOption.id&&(i.numRedes=Math.pow(2,7),i.numHosts=Math.pow(2,24)-2),2==i.data.selectedOption.id&&(i.numRedes=Math.pow(2,14),i.numHosts=Math.pow(2,16)-2),3==i.data.selectedOption.id&&(i.numRedes=Math.pow(2,21),i.numHosts=Math.pow(2,8)-2)),1==i.mask)if(i.numHosts=Math.pow(2,c),s>24){var r=s-24;i.numRedes="1/"+Math.pow(2,r)}else{var r=24-s;i.numRedes=Math.pow(2,r)}for(var d="",p="",z="",o="",l="",f="",u="",x="",a=0,m=8;a<m;a++)"1"==i.ms_1_b[a]?(l+=i.ip_1_b[a],d+="0"):(l+="0",d+=i.ip_1_b[a]),"1"==i.ms_2_b[a]?(f+=i.ip_2_b[a],p+="0"):(f+="0",p+=i.ip_2_b[a]),"1"==i.ms_3_b[a]?(u+=i.ip_3_b[a],z+="0"):(u+="0",z+=i.ip_3_b[a]),"1"==i.ms_4_b[a]?(x+=i.ip_4_b[a],o+="0"):(x+="0",o+=i.ip_4_b[a]);i.networkId=i.bin2dec(l)+"."+i.bin2dec(f)+"."+i.bin2dec(u)+"."+i.bin2dec(x),i.hostId=i.bin2dec(d)+"."+i.bin2dec(p)+"."+i.bin2dec(z)+"."+i.bin2dec(o);for(var y="",k="",B="",v="",h="",g="",C="",D="",a=0,m=8;a<m;a++)"1"==i.zms_1_b[a]?(h+=i.zip_1_b[a],y+="0"):(h+="0",y+=i.zip_1_b[a]),"1"==i.zms_2_b[a]?(g+=i.zip_2_b[a],k+="0"):(g+="0",k+=i.zip_2_b[a]),"1"==i.zms_3_b[a]?(C+=i.zip_3_b[a],B+="0"):(C+="0",B+=i.zip_3_b[a]),"1"==i.zms_4_b[a]?(D+=i.zip_4_b[a],v+="0"):(D+="0",v+=i.zip_4_b[a]);i.znetworkId=i.bin2dec(h)+"."+i.bin2dec(g)+"."+i.bin2dec(C)+"."+i.bin2dec(D),i.zhostId=i.bin2dec(y)+"."+i.bin2dec(k)+"."+i.bin2dec(B)+"."+i.bin2dec(v),i.conclusion="La PCs están tienen diferentes Host ID y estan en diferentes Redes",i.networkId==i.znetworkId&&(i.conclusion="Las PC estan en la misma Red"),i.hostId==i.zhostId&&(i.conclusion="Las PC tienen el mismo Host ID pero estan en diferentes Redes"),i.networkId==i.znetworkId&&i.hostId==i.zhostId&&(i.conclusion="PC1 y PC2 son la misma computadora")},i.generateCIDR=function(_){i.ms_1_b="",i.ms_2_b="",i.ms_3_b="",i.ms_4_b="";for(var e=0;e<8;e++)0!=_?(i.ms_1_b+="1",_--):i.ms_1_b+="0";for(var e=0;e<8;e++)0!=_?(i.ms_2_b+="1",_--):i.ms_2_b+="0";for(var e=0;e<8;e++)0!=_?(i.ms_3_b+="1",_--):i.ms_3_b+="0";for(var e=0;e<8;e++)0!=_?(i.ms_4_b+="1",_--):i.ms_4_b+="0"},i.zgenerateCIDR=function(_){i.zms_1_b="",i.zms_2_b="",i.zms_3_b="",i.zms_4_b="";for(var e=0;e<8;e++)0!=_?(i.zms_1_b+="1",_--):i.zms_1_b+="0";for(var e=0;e<8;e++)0!=_?(i.zms_2_b+="1",_--):i.zms_2_b+="0";for(var e=0;e<8;e++)0!=_?(i.zms_3_b+="1",_--):i.zms_3_b+="0";for(var e=0;e<8;e++)0!=_?(i.zms_4_b+="1",_--):i.zms_4_b+="0"}}]),app.directive("limitTo",[function(){return{restrict:"A",link:function(i,_,e){var s=parseInt(e.limitTo);angular.element(_).on("keypress",function(i){0==this.selectionStart&&8==this.selectionEnd&&(this.value=""),0==this.selectionStart&&3==this.selectionEnd&&(this.value=""),this.value.length==s&&i.preventDefault()})}}}]),app.directive("numbersOnly",function(){return{require:"ngModel",link:function(i,_,e,s){function n(i){if(i){var _=i.replace(/[^0-9]/g,"");return _!==i&&(s.$setViewValue(_),s.$render()),_}}s.$parsers.push(n)}}}),app.directive("binaryOnly",function(){return{require:"ngModel",link:function(i,_,e,s){function n(i){if(i){var _=i.replace(/[^0-1]/g,"");return _!==i&&(s.$setViewValue(_),s.$render()),_}}s.$parsers.push(n)}}}),app.directive("selectOnClick",["$window",function(i){return{restrict:"A",link:function(_,e,s){e.on("click",function(){i.getSelection().toString()||this.setSelectionRange(0,this.value.length)})}}}]),app.controller("ModalInstanceCtrl",function(i,_){var e=this;e.items=_,e.selected={item:e.items[0]},e.ok=function(_){e.selected.item=_,i.close(e.selected.item)},e.cancel=function(){i.dismiss("cancel")}}),app.component("modalComponent",{templateUrl:"myModalContent.html",bindings:{resolve:"<",close:"&",dismiss:"&"},controller:function(){var i=this;i.$onInit=function(){i.items=i.resolve.items,i.selected={item:i.items[0]}},i.ok=function(){i.close({$value:i.selected.item})},i.cancel=function(){i.dismiss({$value:"cancel"})}}});