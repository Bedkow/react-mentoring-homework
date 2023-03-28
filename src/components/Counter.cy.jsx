import React from 'react'
import Counter from './Counter'

describe('Counter component', () => {
  it('renders initial value provided in props', () => {
    const value = 5;
    cy.mount(<Counter value={value} />);
    cy.contains(`Counter value: ${value}`);
  });

  it('decrements the displayed value when "Decrement" button is clicked', () => {
    cy.mount(<Counter value={0} />);
    cy.get('button:contains("Decrement")').click();
    cy.contains('Counter value: -1');
  });

  it('increments the displayed value when "Increment" button is clicked', () => {
    cy.mount(<Counter value={0} />);
    cy.get('button:contains("Increment")').click();
    cy.contains('Counter value: 1');
  });
});
