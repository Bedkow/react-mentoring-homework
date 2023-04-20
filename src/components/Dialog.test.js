import React from 'react';
import { createPortal } from 'react-dom';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import FocusTrap from 'focus-trap-react';
import Dialog from './Dialog';

describe('Dialog', () => {
    const mockHandleClick = jest.fn();

    afterEach(() => {
        mockHandleClick.mockClear();
    });

    it('renders dialog with title and children', () => {
        const component = create(
            <Dialog dialogTitle='My Title' handleClick={mockHandleClick}>
                <p>My Content</p>
            </Dialog>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders dialog to body', () => {
        const wrapper = mount(
            <Dialog dialogTitle='My Title' handleClick={mockHandleClick}>
                <p>My Content</p>
            </Dialog>
        );
        expect(wrapper.containsMatchingElement(createPortal(<></>, document.body))).toEqual(true);
    });

    it('handles click event', () => {
        const wrapper = mount(
            <Dialog dialogTitle='My Title' handleClick={mockHandleClick}>
                <p>My Content</p>
            </Dialog>
        );
        const closeButton = wrapper.find('.dialog-header span:last-child');
        expect(closeButton).toHaveLength(1);
        closeButton.simulate('click');
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });

    it('focuses dialog', () => {
        const wrapper = mount(
            <Dialog dialogTitle='My Title' handleClick={mockHandleClick}>
                <p>My Content</p>
            </Dialog>
        );
        const dialog = wrapper.find(FocusTrap);
        expect(dialog).toHaveLength(1);
        const focusTrapProps = dialog.props();
        expect(focusTrapProps.focusTrapOptions.clickOutsideDeactivates).toEqual(true);
        expect(focusTrapProps.focusTrapOptions.escapeDeactivates).toEqual(true);
        expect(focusTrapProps.focusTrapOptions.returnFocusOnDeactivate).toEqual(true);
        expect(focusTrapProps.focusTrapOptions.setReturnFocus).toEqual(document.activeElement);
    });
});
