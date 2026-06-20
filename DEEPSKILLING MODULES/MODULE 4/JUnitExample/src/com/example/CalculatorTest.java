package com.example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CalculatorTest {

	@Test
	void test() {
		Calculator c = new Calculator();
		int result=c.add(2, 3);
		assertEquals(5, result);
	}

}
