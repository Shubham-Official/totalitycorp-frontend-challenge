const Shimmer = () => {
    return (
        <div data-testid="shimmer" className="flex justify-center w-[267px] mx-3 my-2 shadow-lg bg-slate-200">
            {Array(15).fill("").map((e, index) => (
                <div key={index} className="w-72 h-80 m-2 bg-slate-200">
                </div>
            ))}
        </div>
    );

    // <div className="shimmer"><div class="spinner-border text-warning" role="status">
    //     <span class="sr-only">Loading...</span>
    // </div></div>
};

export default Shimmer;