package net.nextgen.slickdeals.post;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Lists;

@RestController
@RequestMapping("/Posts")
public class PostController {

	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public List<Post> getPosts(@PathVariable String id) {
		
		List<Post> posts = Lists.newArrayList();
		
		for (int i = 0; i < 20; i++) {
			Post post = new Post();
			post.setMessage("message " + i);
			posts.add(post);
		}
		
		
		return posts;
	}
	
}
