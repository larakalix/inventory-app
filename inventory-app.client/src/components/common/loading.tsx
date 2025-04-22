export const Loading = () => {
    return (
        <div role="alert" className="border-s-4 border-sky-500 bg-sky-50 p-4">
            <div className="flex items-center gap-2 text-sky-700">
                <span>🔄</span>

                <strong className="font-medium"> Loading </strong>
            </div>

            <p className="mt-2 text-sm text-sky-700">
                Please wait while we load the data. This may take a few seconds.
                <br />
                If the loading takes too long, please check your internet
                connection or try again later.
            </p>
        </div>
    );
};
