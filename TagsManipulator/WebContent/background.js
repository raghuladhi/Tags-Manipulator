/**
 * 
 */
var area = document.getElementById("contentArea");
function displayInsert(){
	var string =  '<form><div class=\"form-group\"><label for=\"tag\">Enter the tag</label><input type=\"text\" class=\"form-control\" id=\"tag\" placeholder=\"Ex: <p>\" required></div><div class=\"form-group\"><label for=\"position\">Enter the pos</label><input type=\"text\" class=\"form-control\" id=\"pos\" placeholder=\"Ex: 3\" required></div><div class=\"form-group\"><label for=\"content\">Enter the text inside tag</label><input type=\"text\" class=\"form-control\" id=\"content\" placeholder=\"Ex: hello world\" required></div></form><br><button type="button" class="btn btn-primary" onclick="insert()">Submit</button>';
	area.innerHTML =string;
	
}

function displayModify(){
	var string =  '<form><div class=\"form-group\"><label for=\"tag\">Enter the tag</label><input type=\"text\" class=\"form-control\" id=\"tag\" placeholder=\"Ex: <p>\" required></div><div class=\"form-group\"><label for=\"position\">Enter the pos</label><input type=\"text\" class=\"form-control\" id=\"pos\" placeholder=\"Ex: 3\" required></div><div class=\"form-group\"><label for=\"content\">Enter the text inside tag</label><input type=\"text\" class=\"form-control\" id=\"content\" placeholder=\"Ex: hello world\" required></div></form><br><button type="button" class="btn btn-primary" onclick="modify()">Submit</button>';
	area.innerHTML =string;

}

function displayRemove(){
var string = '<form><div class="form-group"><label for="tag">Enter the tag</label><input type="text" class="form-control" id="tag" placeholder="Ex: <p>" required></div><div class="form-group"><label for="position">Enter the pos</label><input type="text" class="form-control" id="pos" placeholder="Ex: 3" required></div></form><br><button type="button" class="btn btn-primary" onclick="remove()">Submit</button>';
	area.innerHTML = string;
}

 var btn = document.getElementById("render").addEventListener("click",function(){
	console.log("inside render");
	var textArea = document.getElementById("htmlText");
	var object={
			"text":textArea.value,
			"type":"render"
	}
	fetch('http://localhost:8081/TagsManipulator/render',{
		method:"POST",
		body:JSON.stringify(object),
		header:{
			"content-type":"text/json"
		}
	})
	.then(function(response){
		console.log("successful request");
		response.text()
			.then(function(text){
				textArea.value=text;
			});
	})
	.catch(function(err){
		console.log("Error occured:"+err);
	});
});
function insert(){
	var textArea = document.getElementById("htmlText");
	var tag = document.getElementById("tag").value;
	var pos = document.getElementById("pos").value;
	var content = document.getElementById("content").value;
	if(textArea.value=="" || tag=="" || pos=="" || content==""){
		alert("Enter all the fields");
	}
	else{
		var object = {
				"type":"insert",
				"text":textArea.value,
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
		    response.text()
		    	.then(function(text){
		    		textArea.value=text;
		    		console.log(text);
		    	});
		    
		})
		.catch(function(err){
			console.log("error is "+err);
		});
	}
}

function modify(){
	var textArea = document.getElementById("htmlText");
	var tag = document.getElementById("tag").value;
	var pos = document.getElementById("pos").value;
	var content = document.getElementById("content").value;
	if(textArea.value=="" || tag=="" || pos=="" || content==""){
		alert("Enter all the fields");
	}
	else{
		var object = {
				"type":"modify",
				"text":textArea.value,
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
		    response.text()
		    	.then(function(text){
		    		textArea.value=text;
		    		console.log(text);
		    	});
		    
		})
		.catch(function(err){
			console.log("error is "+err);
		});
	}
}

function remove(){
	var textArea = document.getElementById("htmlText");
	var tag = document.getElementById("tag").value;
	var pos = document.getElementById("pos").value;
	if(textArea.value=="" || tag=="" || pos==""){
		alert("Enter all the fields");
	}
	else{
		var object = {
				"type":"remove",
				"text":textArea.value,
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
		    response.text()
		    	.then(function(text){
		    		textArea.value=text;
		    		console.log(text);
		    	});
		    
		})
		.catch(function(err){
			console.log("error is "+err);
		});
	}
}