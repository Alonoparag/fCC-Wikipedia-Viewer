function search() {
	$('#results')
		.empty();
	$.ajax({
		url: 'https://en.wikipedia.org/w/api.php',
		data: {
			"action": "opensearch",
			"format": "json",
			"search": document.getElementById('search')
				.attributes[1].ownerElement.value,
			"namespace": "0",
			"limit": "10",
			"profile": "normal",
			"redirects": "return",
			"formatversion": "1"
		},
		dataType: 'jsonp',
		success: function(resultObject) {
			//========POPULATE RESULTS AND SET TITLES
			for(let i = 0; i < resultObject[1].length; i++) {
				let liNode = document.createElement('LI');
				let anchorNode = document.createElement('A');
				let contentDivNode = document.createElement('DIV');
				let headNode = document.createElement('H3');
				let textDivNode = document.createElement('DIV');
				let headText = document.createTextNode(resultObject[1][i]);
				let textNode = document.createTextNode(resultObject[2][i]);
				anchorNode.className = 'link';
				$(anchorNode)
					.attr('href', resultObject[3][i])
				contentDivNode.className = 'content';
				headNode.className = 'title';
				textDivNode.className = 'text';
				textDivNode.appendChild(textNode);
				headNode.appendChild(headText);
				contentDivNode.appendChild(headNode);
				contentDivNode.appendChild(textDivNode);
				anchorNode.appendChild(contentDivNode);
				liNode.appendChild(anchorNode);
				document.getElementById('results')
					.appendChild(liNode);
			}
			// for(let i = 0; i < resultObject[2].length; i++) {
			// 	console.log(i)
			// 	console.log(resultObject[2][i])
			// 	console.log($('#results > li:nth-child(' + i + ') > a > .content > .text'))
			// 	$('#results > li:nth-child(' + i + ') > a > .content > .text')
			// 		.text(resultObject[2][i]);
			// }
			// for(let i = 0; i < resultObject[3].length; i++) {
			// 	$('#results > li:nth-child(' + i + ') > .link')
			// 		.attr('href', resultObject[3][i]);
			// }
		}
	});
}
