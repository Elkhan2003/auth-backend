import scss from './ResetPasswordPage.module.scss';
import { usePatchResetPasswordMutation } from '@/src/redux/api/auth';

const ResetPasswordPage = () => {
	const [patchResetPasswordMutation] = usePatchResetPasswordMutation();

	return (
		<section className={scss.ResetPasswordPage}>
			<div className="container">
				<div className={scss.content}>ResetPasswordPage</div>
			</div>
		</section>
	);
};

export default ResetPasswordPage;
