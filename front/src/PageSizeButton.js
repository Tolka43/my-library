const PageSizeButton = ({ setPageSize }) => {
  const pageSizes = [4, 8, 16];
  return (
    <div className='btn-group mt-3' role='group' aria-label='Second group'>
      {pageSizes.map(pageSize => (
        <button
          key={pageSize}
          onClick={() => setPageSize(pageSize)}
          type='button'
          className='btn btn-secondary'
        >
          {pageSize}
        </button>
      ))}
    </div>
  );
};

export default PageSizeButton;
