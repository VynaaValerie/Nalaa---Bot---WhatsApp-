const _0x3ef3c4=_0xa6d9;(function(_0x1f3e61,_0x42efa9){const _0x5c56a3=_0xa6d9,_0x128fd5=_0x1f3e61();while(!![]){try{const _0x5ca5c2=-parseInt(_0x5c56a3(0x201))/0x1+parseInt(_0x5c56a3(0x1f2))/0x2*(parseInt(_0x5c56a3(0x1dc))/0x3)+parseInt(_0x5c56a3(0x1d1))/0x4+parseInt(_0x5c56a3(0x1f3))/0x5+-parseInt(_0x5c56a3(0x1d7))/0x6*(-parseInt(_0x5c56a3(0x1fa))/0x7)+parseInt(_0x5c56a3(0x1d6))/0x8*(parseInt(_0x5c56a3(0x1f9))/0x9)+-parseInt(_0x5c56a3(0x1e2))/0xa;if(_0x5ca5c2===_0x42efa9)break;else _0x128fd5['push'](_0x128fd5['shift']());}catch(_0x53a174){_0x128fd5['push'](_0x128fd5['shift']());}}}(_0x2531,0xe7c4b));function _0xa6d9(_0x1f60a4,_0x207dd7){const _0x25315d=_0x2531();return _0xa6d9=function(_0xa6d952,_0x410e2f){_0xa6d952=_0xa6d952-0x1cd;let _0x565516=_0x25315d[_0xa6d952];return _0x565516;},_0xa6d9(_0x1f60a4,_0x207dd7);}import _0x412b16 from'fs';import _0x151a02 from'moment-timezone';let menuFormat={'header':_0x3ef3c4(0x1db),'body':'\x20»\x20%cmd','footer':'','after':_0x3ef3c4(0x1d3)+global['info'][_0x3ef3c4(0x1fb)]},handler=async(_0x277c7d,{conn:_0x5d145d,usedPrefix:_0x3d03ec,__dirname:_0x17e791,args:_0x56f93d,command:_0x3d6327})=>{const _0x454a42=_0x3ef3c4,_0x36c6f4=_0x151a02()['tz'](_0x454a42(0x1fc)),_0x51f2ec=_0x36c6f4[_0x454a42(0x1ef)](_0x454a42(0x1cd)),_0x54ef68=_0x454a42(0x1f8)+_0x36c6f4[_0x454a42(0x1ef)](_0x454a42(0x1dd));let _0x274af1={'general':'G\x20e\x20n\x20e\x20r\x20a\x20l','premium':_0x454a42(0x1fe),'pushkontak':_0x454a42(0x1e3),'store':_0x454a42(0x202),'owner':_0x454a42(0x1f6),'main':_0x454a42(0x1f1),'group':'G\x20r\x20o\x20u\x20p'};if(_0x3d6327===_0x454a42(0x1d4)){let _0xb9380=_0x454a42(0x1d8);return _0xb9380+=Object[_0x454a42(0x1d5)](_0x274af1)[_0x454a42(0x1ee)](_0x26f6e4=>'-\x20'+_0x3d03ec+_0x454a42(0x1ff)+_0x26f6e4)[_0x454a42(0x1e8)]('\x0a'),_0xb9380+=_0x454a42(0x1e5),_0x5d145d['sendMessage'](_0x277c7d['chat'],{'text':_0xb9380,'contextInfo':{'externalAdReply':{'title':'Menu\x20List','body':global['info'][_0x454a42(0x1fb)],'thumbnailUrl':global[_0x454a42(0x200)][_0x454a42(0x1d9)],'sourceUrl':global[_0x454a42(0x1ce)][_0x454a42(0x1e0)],'mediaType':0x1,'renderLargerThumbnail':!![]}}});}let _0x5bf4be=Object['values'](global[_0x454a42(0x1ea)])[_0x454a42(0x1d0)](_0x421bc4=>_0x421bc4[_0x454a42(0x1da)]&&_0x421bc4[_0x454a42(0x1fd)])[_0x454a42(0x1ee)](_0x2d99f1=>({'help':_0x2d99f1[_0x454a42(0x1fd)],'tags':_0x2d99f1[_0x454a42(0x1da)],'command':_0x2d99f1[_0x454a42(0x1e6)]})),_0x4499bf=_0x56f93d[0x0]?_0x56f93d[0x0]['toLowerCase']():null,_0x4ccc2f=_0x454a42(0x1cf)+(_0x277c7d[_0x454a42(0x1e4)]||'Unknown')+_0x454a42(0x1d2)+_0x51f2ec+'\x0a\x0a'+_0x54ef68+_0x454a42(0x1de);if(_0x4499bf&&_0x274af1[_0x4499bf]){let _0x24b5f8=menuFormat[_0x454a42(0x1f7)][_0x454a42(0x1f0)]('%category',_0x274af1[_0x4499bf]),_0x57965b=_0x5bf4be['filter'](_0x408c26=>_0x408c26[_0x454a42(0x1da)][_0x454a42(0x203)](_0x4499bf))[_0x454a42(0x1ee)](_0xb133fe=>{const _0x423bb9=_0x454a42;return Array[_0x423bb9(0x1e1)](_0xb133fe[_0x423bb9(0x1fd)])?menuFormat[_0x423bb9(0x204)][_0x423bb9(0x1f0)](_0x423bb9(0x1f4),_0xb133fe['help']['map'](_0x4fc8da=>''+_0x3d03ec+_0x4fc8da)['join'](',\x20')):menuFormat[_0x423bb9(0x204)][_0x423bb9(0x1f0)]('%cmd',''+_0x3d03ec+_0xb133fe['help']);})['join']('\x0a');_0x4ccc2f+=_0x24b5f8+'\x0a'+_0x57965b;}else _0x4ccc2f+=Object[_0x454a42(0x1d5)](_0x274af1)[_0x454a42(0x1ee)](_0x2f61d0=>{const _0x3544f2=_0x454a42;let _0x269c96=menuFormat[_0x3544f2(0x1f7)]['replace'](_0x3544f2(0x1df),_0x274af1[_0x2f61d0]),_0x30aed2=_0x5bf4be[_0x3544f2(0x1d0)](_0x44affd=>_0x44affd[_0x3544f2(0x1da)]['includes'](_0x2f61d0))[_0x3544f2(0x1ee)](_0x16ef08=>{const _0x375418=_0x3544f2;return Array['isArray'](_0x16ef08[_0x375418(0x1fd)])?menuFormat[_0x375418(0x204)][_0x375418(0x1f0)](_0x375418(0x1f4),_0x16ef08[_0x375418(0x1fd)]['map'](_0x57573d=>''+_0x3d03ec+_0x57573d)[_0x375418(0x1e8)](',\x20')):menuFormat[_0x375418(0x204)][_0x375418(0x1f0)](_0x375418(0x1f4),''+_0x3d03ec+_0x16ef08[_0x375418(0x1fd)]);})[_0x3544f2(0x1e8)]('\x0a');return[_0x269c96,_0x30aed2]['filter'](_0x77b2a4=>_0x77b2a4)[_0x3544f2(0x1e8)]('\x0a');})[_0x454a42(0x1e8)]('\x0a\x0a');_0x4ccc2f+=_0x454a42(0x1e7)+menuFormat['footer']+'\x0a'+menuFormat[_0x454a42(0x1ec)],_0x5d145d[_0x454a42(0x1ed)](_0x277c7d[_0x454a42(0x1e9)],{'text':_0x4ccc2f,'contextInfo':{'externalAdReply':{'title':global[_0x454a42(0x1ce)][_0x454a42(0x1eb)],'body':global[_0x454a42(0x1ce)]['namebot'],'thumbnailUrl':global[_0x454a42(0x200)][_0x454a42(0x1d9)],'sourceUrl':_0x454a42(0x1f5),'mediaType':0x1,'renderLargerThumbnail':!![]}}});};handler[_0x3ef3c4(0x1fd)]=[_0x3ef3c4(0x1d4)],handler[_0x3ef3c4(0x1da)]=['general'],handler['command']=/^(menu|allmenu|menulist)$/i;function _0x2531(){const _0x1e50a6=['4822644fhtMXc','━━━━━━━━━━━━━━━━━━━━\x0a\x0a*Available\x20Menus*\x0a\x0a━━━━━━━━━━━━━━━━━━━━\x0a\x0a','thumbnail','tags','*%category*','41421ilbbub','HH:mm:ss','\x0a\x0aCreator:\x20Vynaa\x20Valerie\x20\x0a\x0aYouTube:\x20https://youtube.com/@VynaaChan\x0a\x0a━━━━━━━━━━━━━━━━━━━━\x0a\x0a','%category','sgc','isArray','24658650nakQwv','P\x20u\x20s\x20h','pushName','\x0a━━━━━━━━━━━━━━━━━━━━','command','\x0a━━━━━━━━━━━━━━━━━━━━\x0a\x0a','join','chat','plugins','author','after','sendMessage','map','format','replace','M\x20a\x20i\x20n','182FqdVPN','8585965dPGzEc','%cmd','https://wa.me/message/2MOJNXNC45Y5E1','O\x20w\x20n\x20e\x20r','header','Time:\x20','18ERkqSH','7NpVDOG','namebot','Asia/Jakarta','help','P\x20R\x20E\x20M\x20I\x20U\x20M','menu\x20','url','1573167ARrZjR','S\x20t\x20o\x20r\x20e','includes','body','dddd,\x20DD\x20MMMM\x20YYYY','info','\x0a\x0a━━━━━━━━━━━━━━━━━━━━\x0a\x0a*Time\x20Information*\x0a\x0a━━━━━━━━━━━━━━━━━━━━\x0a\x0aName:\x20','filter','4339596Eafing','\x0a\x0aDate:\x20','>\x20©\x20','menulist','keys','504208Ldxwtd'];_0x2531=function(){return _0x1e50a6;};return _0x2531();}export default handler;