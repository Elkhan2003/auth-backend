import scss from './LoginPage.module.scss';
import { usePostLoginMutation } from '@/src/redux/api/auth';

const LoginPage = () => {
	const [postLoginMutation] = usePostLoginMutation();

	return (
		<section className={scss.LoginPage}>
			<div className="container">
				<div className={scss.content}></div>
			</div>
		</section>
	);
};

export default LoginPage;
