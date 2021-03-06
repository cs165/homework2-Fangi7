const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  var str = node.innerHTML;
  var constr = node.textContent;
  console.log(node.nodeType);
  console.log(node.nodeName);
  console.log(str);
  if(node.nodeType!=node.TEXT_NODE) {
    for(let i=0;i<node.childNodes.length;i++)
      transformTextNodes(node.childNodes[i]);
  }
  if(node.nodeType!=node.TEXT_NODE) return;
//  var res = str.split(MATCH_LIST['their']).join('their');
  var tokenarr = new Array();
  tokenarr = constr.trim().split(/\s+/);
  console.log(tokenarr.length);
  for(var i=0;i<tokenarr.length;i++){
    console.log("#"+tokenarr[i]+"#");
//there to their
    if(tokenarr[i] =="there"){
      console.log(tokenarr[i]+" Match!");
      tokenarr[i]='their';
    }

    //their to there
    else if (tokenarr[i] == "their"){
      console.log(tokenarr[i]+" Match!");
      tokenarr[i]='there';
    }
    else if (tokenarr[i].match(">their")){
      tokenarr[i].replace(">their",">there");
    }
    else if (tokenarr[i].match("their<")){
      tokenarr[i].replace("their<","there<");
    }
    //they're to there
    else if (tokenarr[i] =="they\'re"){
      console.log(tokenarr[i]+" Match!");
      tokenarr[i]='there';
    }
    else if (tokenarr[i] =="There"){
      console.log(tokenarr[i]+" Match!");
      tokenarr[i]='Their';
    }
    else if (tokenarr[i] =="Their"){
      console.log(tokenarr[i]+" Match!");
      tokenarr[i]='There';
    }
    else if (tokenarr[i] =="They\'re"){
      console.log(tokenarr[i]+" Match!");
      tokenarr[i]='There';
    }
    else if (tokenarr[i] =="THERE"){
      tokenarr[i]='THEIR';
    }
    else if (tokenarr[i] =="THEIR"){
      tokenarr[i]='THERE';
    }
    else if (tokenarr[i] =="THEY\'RE"){
      tokenarr[i]='THERE';
    }
  }
  res = tokenarr.join(" ");
  console.log(res);

  node.textContent = res+" ";

}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
