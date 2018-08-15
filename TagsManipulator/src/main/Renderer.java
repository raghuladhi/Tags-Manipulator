package main;

import java.io.BufferedReader;
import java.io.IOException;
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
		String type=null,text,tag,content;
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
			text= (String) jsonobj.get("text");
			System.out.println(text);
			
			
			
			
			
			
			
		} catch (ParseException e) {
			
			e.printStackTrace();
		}
		
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
