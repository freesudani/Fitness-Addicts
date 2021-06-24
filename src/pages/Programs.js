import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';
import InfoSection from '../components/InfoSection';
import { InfoData } from '../data/InfoData';
const Programs = () => {
	return (
		<>
			<Hero slides={SliderData} />
			<InfoSection {...InfoData} />
		</>
	);
};
export default Programs;