/* eslint-disable react/prop-types */
const ToolBar = ({filters, selected, onSelectedFilter}) => {

    return (
        <div>
            {filters.map((filter) => (
                <button
                    className="btn"
                    key={filter}
                    onClick={() => onSelectedFilter(filter)}
                    style={{ backgroundColor: selected === filter ? 'lightgray' : 'white' }}
                >
                    {filter}
                </button>
            ))}
        </div>
  );
};

export default ToolBar