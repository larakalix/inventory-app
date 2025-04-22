type Props = {
    error: Error;
};
export const Error = ({ error }: Props) => {
    return (
        <div role="alert" className="border-s-4 border-red-500 bg-red-50 p-4">
            <div className="flex items-center gap-2 text-red-700">
                <span>❌</span>

                <strong className="font-medium"> Error </strong>
            </div>

            <p className="mt-2 text-sm text-red-700">
                {error.message}
                <br />
                Please try again later or contact support if the issue persists.
            </p>
        </div>
    );
};
