import scss from './ForgotPage.module.scss';
import { usePostForgotPasswordMutation } from '@/src/redux/api/auth';

const ForgotPage = () => {
	const [postForgotPasswordMutation] = usePostForgotPasswordMutation();

	return (
		<section className={scss.ForgotPage}>
			<div className="container">
				<div className={scss.content}>ForgotPage</div>
			</div>
		</section>
	);
};

export default ForgotPage;
