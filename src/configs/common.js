/* 存储localStorage */
export const setLocal = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/* 获取localStorage */
export const getLocal = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/* 删除localStorage */
export const removeLocal = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/* 存储localStorage */
export const setSession = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.sessionStorage.setItem(name, content);
}

/* 获取localStorage */
export const getSession = name => {
	if (!name) return;
	return window.sessionStorage.getItem(name);
}

/* 删除localStorage */
export const removeSession = name => {
	if (!name) return;
	window.sessionStorage.removeItem(name);
}

/* 获取url的一个参数值 */
export const getUrlObj = (name) => {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if(r!=null)return decodeURI(r[2]);
  return null;
}
/* 获取url的参数对象 */
export const getUrlJson = () => {
  let json = {};
  let arr = window.location.search.substr(1).split('&');
  for(var i = 0;i<arr.length;i++){
    let tempArr = arr[i].split('=');
    json[tempArr[0]] = tempArr[1];
  }
  return json;
}
