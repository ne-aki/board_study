package com.hcnc.spring_board_practice.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// @Configuration : 객체 생성 + 이 클래스는 설정 내용이 들어있다는 것을 인지
// @Bean : 메서드 정의문에 사용하며, 리턴되는 데이터를 객체로 만들어줌
@Configuration
public class FilterConfig {
    @Bean
    public FilterRegistrationBean<Filter1> myFilterRegistration() {
        FilterRegistrationBean<Filter1> registrationBean = new FilterRegistrationBean<>();

        registrationBean.setFilter(new Filter1()); // 사용할 필터 지정
        registrationBean.addUrlPatterns("/*"); // 모든 요청에 대해 작동
        registrationBean.setOrder(0); // 실행 순서: 숫자가 작을수록 먼저 실행됨

        return registrationBean;
    }
}
