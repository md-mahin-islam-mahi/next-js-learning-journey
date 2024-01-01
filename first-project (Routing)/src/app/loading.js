const loading = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-x-5">
            <div className="w-[40px] h-[40px] border-4 border-dashed rounded-full animate-spin border-black"></div>
            <h3>Loading...</h3>
        </div>
    );
};

export default loading;