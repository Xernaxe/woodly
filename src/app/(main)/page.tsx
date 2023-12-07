import { Hero } from "./_components/Hero";
import { OurServices } from "./_components/OurServices";
import { OurWork } from "./_components/OurWork/OurWork";
import { Who } from "./_components/Who/Who";


export default function Home() {
	return (
		<>
			<Hero />
			<div className='desktopL:flex flex-col items-center'>
				<Who />
				<OurServices />
			</div>
			<OurWork />
		</>
	);
}
