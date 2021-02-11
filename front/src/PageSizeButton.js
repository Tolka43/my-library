const PageSizeButton = ({ setPageSize }) => (
  <div className='btn-group mt-3' role='group' aria-label='Second group'>
    <button
      onClick={() => setPageSize(8)}
      type='button'
      className='btn btn-secondary'
    >
      {8}
    </button>

    <button
      onClick={() => setPageSize(16)}
      type='button'
      className='btn btn-secondary'
    >
      {16}
    </button>
  </div>
);

export default PageSizeButton;
