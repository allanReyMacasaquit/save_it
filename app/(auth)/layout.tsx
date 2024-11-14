import Image from 'next/image';

interface AuthlayoutProps {
	children: React.ReactNode;
}
const Authlayout = ({ children }: AuthlayoutProps) => {
	return (
		<div className='flex min-h-screen'>
			<section className='hidden w-1/2 lg:flex xl:w-2/5 items-center justify-center bg-brand p-10 h-screen'>
				<div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12'>
					<Image
						src='/assets/icons/logo-new.svg'
						alt='logo'
						height={100}
						width={100}
						className='h-auto'
					/>

					<div className='space-y-5 text-white'>
						<h1 className='h1'>Manage your files the best way</h1>
						<p className='body-1'>
							This is a place where you can store all your documents.
						</p>
					</div>
					<Image
						src='/assets/icons/illustration.svg'
						alt='logo'
						height={342}
						width={342}
						className='transition-all hover:rotate-2 hover:scale-105'
					/>
				</div>
			</section>
			<section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
				<div className='mb-16 lg:hidden'>
					<Image
						src='/assets/icons/logo-new-login.svg'
						alt='logo'
						width={224}
						height={82}
						className='h-auto w-[200px] lg:w-[250px]'
					/>
				</div>
				{children}
			</section>
		</div>
	);
};
export default Authlayout;
