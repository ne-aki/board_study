package com.hcnc.spring_board_practice.filter;

import javax.servlet.*;
import java.io.IOException;

// 클래스가 필터가 되기 위해선 Filter 인터페이스를 구현해야 함
public class Filter1 implements Filter {

    // 검문소에서 실행할 내용
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        // 검문 내용
        System.out.println("Filter1 검문소 실행~");

        // 검문 끝났으면 다음 단계 실행
        chain.doFilter(request, response); // 다음 필터 OR 흐름을 계속 진행
    }
}
