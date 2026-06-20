package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorEx4Test {
	CalculatorEx4 calculator;
	@Before
	public void setUp() {
		System.out.println("Setup");
		calculator=new CalculatorEx4();
	}
	@After
	public void tearDown() {
		System.out.println("TearDown");
		calculator=null;
	}
	@Test
	public void test() {
		int a = 2;
		int b = 8;
		int result=calculator.add(a, b);
		System.out.println(result);
		assertEquals(10, result);
	}
}
