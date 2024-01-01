"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const handleAddNote = async () => {
		const res = await fetch("/api/testing", {
			method: "POST",
		});
	};
	return (
		<>
			<header className="flex justify-between items-center mt-12">
				<h1 className="font-semibold text-4xl">Notes</h1>
				<button
					className="bg-black text-white w-14 aspect-square rounded-full inline group/add hover:bg-opacity-80 duration-300 transition-all"
					onClick={handleAddNote}
				>
					<FontAwesomeIcon
						icon={faPlus}
						className="group-hover/add:text-4xl transition-all"
						size="xl"
					/>
				</button>
			</header>
		</>
	);
};

export default Header;
