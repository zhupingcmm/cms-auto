package com.cms.backend.security;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import java.io.IOException;

@Component
@Order(1)
public class TransactionFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("TransactionFilter init");
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("TransactionFilter doFilter");
        chain.doFilter(request, response);

    }

    @Override
    public void destroy() {
        System.out.println("TransactionFilter destroy");
        Filter.super.destroy();
    }
}
