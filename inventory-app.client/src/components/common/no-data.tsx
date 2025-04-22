export const NoData = () => {
    return (
        <div
            role="alert"
            className="border-s-4 border-yellow-500 bg-yellow-50 p-4"
        >
            <div className="flex items-center gap-2 text-yellow-700">
                <span>⚠️</span>

                <strong className="font-medium"> No data found </strong>
            </div>

            <p className="mt-2 text-sm text-yellow-700">
                No data available to display. Please check your filters or try
                again later.
                <br />
                If you believe this is an error, please contact support for
                assistance.
            </p>
        </div>
    );
};
