const Modal = () =>  (
    <div className='modal fade'
        id='loading'
        data-bs-backdrop='static'
        tabIndex='-1'
        aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
                <div className='modal-body'>
                    <h4 className='text-center'>Processing...</h4>
                    <div className='spinner-border text-primary' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Modal;