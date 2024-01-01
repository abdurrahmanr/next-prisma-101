import { Note } from "@/lib/types";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Card = ({ description, name, created_at }: Note) => {
	const time = new Date(created_at).toDateString();

	return (
		<>
			<div className="bg-[#F5972C] flex flex-col px-6 pt-6 pb-4 rounded-2xl aspect-square w-full md:w-64 justify-between text-[#31291D]">
				<h1 className="text-xl font-semibold">{name}</h1>
				<div className="flex justify-between items-center">
					<p className="font-base">{moment(created_at).format("ll")}</p>
					<button className="bg-black text-white aspect-square rounded-full inline-block w-12">
						<FontAwesomeIcon icon={faPen} />
					</button>
				</div>
			</div>
		</>
	);
};

export default Card;
