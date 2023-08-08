import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal/Modal';

describe('Modal component', () => {
    const onCloseMock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();  // clear any invocations from previous tests
    });

    it('renders modal content when isOpen is true', () => {
        render(<Modal isOpen={true} onClose={onCloseMock}>Test content</Modal>);

        expect(screen.queryByText('Test content')).not.toBeNull();
    });

    it('does not render modal when isOpen is false', () => {
        const { container } = render(<Modal isOpen={false} onClose={onCloseMock}>Test content</Modal>);

        expect(container.firstChild).toBeNull();
    });

    it('calls onClose when the overlay is clicked', () => {
        render(<Modal isOpen={true} onClose={onCloseMock}>Test content</Modal>);

        fireEvent.click(screen.getByTestId('modal_overlay'));

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when the modal content is clicked, but calls when close button is clicked', () => {
        render(<Modal isOpen={true} onClose={onCloseMock}>Test content</Modal>);

        fireEvent.click(screen.queryByText('Test content'));

        expect(onCloseMock).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByTestId('modal_close_btn'));

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
