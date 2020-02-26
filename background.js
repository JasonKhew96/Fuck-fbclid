chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		let url = new URL(details.url);
		url.searchParams.delete("fbclid");
		return {
			redirectUrl: url.href
		};
	}, { 
		urls: ["*://*/*fbclid=*"] 
	}, ["blocking"]);
