import scss from './RegistrationPage.module.scss';
import { usePostRegistrationMutation } from '@/src/redux/api/auth';

const RegistrationPage = () => {
	const [postRegisterMutation] = usePostRegistrationMutation();

	return (
		<section className={scss.RegistrationPage}>
			<div className="container">
				<div className={scss.content}>RegistrationPage</div>
			</div>
		</section>
	);
};

export default RegistrationPage;
