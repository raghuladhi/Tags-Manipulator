package main;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.*;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
/**
 * Servlet implementation class Renderer
 */
@WebServlet("/Renderer")
public class Renderer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Renderer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		StringBuffer sb = new StringBuffer();
		String line = "";
		String type=null,text = null,startTag,content,closeTag;
		int pos;
		BufferedReader bufferedreader = request.getReader();
		while((line=bufferedreader.readLine())!=null)
		{
			sb.append("\n"+line);
		}
		
		JSONParser parser = new JSONParser();
		
		try {
			Object obj = parser.parse(sb.toString());
			JSONObject jsonobj = (JSONObject)obj;
			type= (String) jsonobj.get("type");
			if(type.equals("insert")){
				text=(String) jsonobj.get("text");
				startTag=(String)jsonobj.get("tag");
				closeTag=getCloseTag(startTag);
				pos = (Integer.parseInt((String) jsonobj.get("pos")));
				content = (String)jsonobj.get("content");
				Pattern pattern = Pattern.compile("((?:.*?"+startTag+".*?"+closeTag+"){"+(pos-1)+"}.*?)("+startTag+".*?"+closeTag+")(.*)",Pattern.DOTALL);
				Matcher matcher = pattern.matcher(text);
				text = matcher.replaceAll("$1"+startTag+content+closeTag+"$2"+"$3");
			}
			else if(type.equals("modify")){
				text=(String) jsonobj.get("text");
				startTag=(String)jsonobj.get("tag");
				closeTag=getCloseTag(startTag);
				pos = (Integer.parseInt((String) jsonobj.get("pos")));
				content = (String)jsonobj.get("content");
				Pattern pattern = Pattern.compile("((?:.*?"+startTag+".*?"+closeTag+"){"+(pos-1)+"}.*?)("+startTag+".*?"+closeTag+")(.*)",Pattern.DOTALL);
				Matcher matcher = pattern.matcher(text);
				text = matcher.replaceAll("$1"+startTag+content+closeTag+"$3");
			}
			else if(type.equals("remove")){
				text=(String) jsonobj.get("text");
				startTag=(String)jsonobj.get("tag");
				closeTag=getCloseTag(startTag);
				pos = (Integer.parseInt((String) jsonobj.get("pos")));
				Pattern pattern = Pattern.compile("((?:.*?"+startTag+".*?"+closeTag+"){"+(pos-1)+"}.*?)("+startTag+".*?"+closeTag+")(.*)",Pattern.DOTALL);
				Matcher matcher = pattern.matcher(text);
				text = matcher.replaceAll("$1"+"$3");
				
				
			}
			else if(type.equals("render")){
				text=(String) jsonobj.get("text");
				HashMap<String,String> unicode = new HashMap<String,String>();
				unicode.put("\\\\n", "<p>");
				unicode.put("\\\\u0010", "<table>");
				unicode.put("\\\\u0012", "<tr>");
				unicode.put("\\\\u001c", "<td>");
				unicode.put("\\\\u0011", "</table>");
				unicode.put("\\\\u000b", "<br>");
				for(String key:unicode.keySet()){
				text = text.replaceAll(key, unicode.get(key));
				}
				
				
			}
			response.setContentType("text");
			response.getWriter().write(text);
			
			
			
			
		} catch (ParseException e) {
			
			e.printStackTrace();
		}
		
	
	}

	private String getCloseTag(String startTag) {
		StringBuilder stringbuilder = new StringBuilder(startTag);
		stringbuilder.insert(1,"\\/");
		return stringbuilder.toString();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}