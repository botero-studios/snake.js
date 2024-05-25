const Score = ({
	children,
	className,
}: {
	children: number;
	className?: string;
}) => {
	return (
		<div
			className={`text-center text-4xl font-bold text-blue-900 ${className}`}>
			<h1>Score: {children}</h1>
		</div>
	);
};

export default Score;
