import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

function Dialog({dialogTitle, children, handleClick}) {
	return (
		<FocusTrap>
			{createPortal(
				<>
                <div className='dialog-header'>
                    <span>{dialogTitle}</span>
                    <span onClick={handleClick}>X</span>
                </div>
                {children}
                </>,
				document.body
			)}
		</FocusTrap>
	);
}

export default Dialog;
