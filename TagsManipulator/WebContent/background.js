/**
 * 
 */


var area = document.getElementById("contentArea");
function displayInsert(){
	var string =  '<form><div class=\"form-group\"><label for=\"tag\">Enter the tag</label><input type=\"text\" class=\"form-control\" id=\"tag\" placeholder=\"Ex: <p>\"></div><div class=\"form-group\"><label for=\"position\">Enter the pos</label><input type=\"text\" class=\"form-control\" id=\"pos\" placeholder=\"Ex: 3\"></div><div class=\"form-group\"><label for=\"content\">Enter the text inside tag</label><input type=\"text\" class=\"form-control\" id=\"content\" placeholder=\"Ex: hello world\"></div></form><br><button type="button" class="btn btn-primary" onclick="insert()">Submit</button>';
	area.innerHTML =string;
	
}

function displayModify(){
	var string =  '<form><div class=\"form-group\"><label for=\"tag\">Enter the tag</label><input type=\"text\" class=\"form-control\" id=\"tag\" placeholder=\"Ex: <p>\"></div><div class=\"form-group\"><label for=\"position\">Enter the pos</label><input type=\"text\" class=\"form-control\" id=\"pos\" placeholder=\"Ex: 3\"></div><div class=\"form-group\"><label for=\"content\">Enter the text inside tag</label><input type=\"text\" class=\"form-control\" id=\"content\" placeholder=\"Ex: hello world\"></div></form><br><button type="button" class="btn btn-primary" onclick="modify()">Submit</button>';
	area.innerHTML =string;

}

function displayRemove(){
var string = '<form><div class="form-group"><label for="tag">Enter the tag</label><input type="text" class="form-control" id="tag" placeholder="Ex: <p>"></div><div class="form-group"><label for="position">Enter the pos</label><input type="text" class="form-control" id="pos" placeholder="Ex: 3"></div></form><br><button type="button" class="btn btn-primary" onclick="remove()">Submit</button>';
	area.innerHTML = string;
}

function insert(){
	var text = document.getElementById("htmlText").value;
	var tag = document.getElementById("tag").value;
	var pos = document.getElementById("pos").value;
	var content = document.getElementById("content").value;
	var object = {
			"type":"insert",
			"text":text,
			"tag":tag,
			"pos":pos,
			"content":content
	}
	fetch('http://localhost:8081/TagsManipulator/render',{
		method:'POST',
		body:JSON.stringify(object),
		header:{
			'content-type':'text/json'
		}
	})
	.then(function(response) {
		console.log("Successful request");
	   /* response.text()
	    	.then(function(text){
	    		
	    		console.log(text);
	    	});*/
	    
	})
	.catch(function(err){
		console.log("error is "+err);
	});
	
}

function modify(){
	var text = document.getElementById("htmlText").value;
	var tag = document.getElementById("tag").value;
	var pos = document.getElementById("pos").value;
	var content = document.getElementById("content").value;
	
	var object = {
			"type":"modify",
			"text":text,
			"tag":tag,
			"pos":pos,
			"content":content
	}
	fetch('http://localhost:8081/TagsManipulator/render',{
		method:'POST',
		body:JSON.stringify(object),
		header:{
			'content-type':'text/json'
		}
	})
	.then(function(response) {
		console.log("Successful request");
	   /* response.text()
	    	.then(function(text){
	    		
	    		console.log(text);
	    	});*/
	    
	})
	.catch(function(err){
		console.log("error is "+err);
	});
	
}

function remove(){
	var text = document.getElementById("htmlText").value;
	var tag = document.getElementById("tag").value;
	var pos = document.getElementById("pos").value;
	var object = {
			"type":"remove",
			"text":text,
			"tag":tag,
			"pos":pos,
	}
	fetch('http://localhost:8081/TagsManipulator/render',{
		method:'POST',
		body:JSON.stringify(object),
		header:{
			'content-type':'text/json'
		}
	})
	.then(function(response) {
		console.log("Successful request");
	   /* response.text()
	    	.then(function(text){
	    		
	    		console.log(text);
	    	});*/
	    
	})
	.catch(function(err){
		console.log("error is "+err);
	});
	
}