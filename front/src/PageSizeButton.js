import { appConfig } from "./config";

const PageSizeButton = ({ setPageSize }) => {
  return (
    <div className='btn-group' role='group' aria-label='Second group'>
      {appConfig.pageSizes.map(pageSize => (
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
