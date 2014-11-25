package net.nextgen.slickdeals.config;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@ComponentScan(basePackages = "net.nextgen.slickdeals")
@EnableWebMvc
public class MvcConfig extends WebMvcConfigurerAdapter {

	@Override
	public void addResourceHandlers(
			org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry registry) {

		registry.addResourceHandler("/resources/**").addResourceLocations(
				"/resources");
		registry.addResourceHandler("/app/**").addResourceLocations(
				"/app");
		registry.addResourceHandler("/ext/**").addResourceLocations(
				"/ext");
		registry.addResourceHandler("/build/**").addResourceLocations(
				"/build");
	
	};

	@Override
	public void configureMessageConverters(
			List<HttpMessageConverter<?>> converters) {
		final MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
		final ObjectMapper objectMapper = new ObjectMapper();
		 objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
//		objectMapper.configure(JsonGenerator.Feature.QUOTE_FIELD_NAMES, false);
		objectMapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES,
				true);
		objectMapper.configure(JsonParser.Feature.ALLOW_SINGLE_QUOTES, true);

		converter.setObjectMapper(objectMapper);
		converters.add(converter);
		super.configureMessageConverters(converters);
	}
}
