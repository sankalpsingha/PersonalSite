function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-zinc-100 stroke-zinc-400 "
			/>
			<path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400" />
		</svg>
	)
}

export default function Newsletter() {
	return (
		<form action="/thank-you" className="rounded-2xl border border-zinc-100 p-6 ">
			<h2 className="flex text-sm font-semibold text-zinc-900 ">
				<MailIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Stay up to date</span>
			</h2>
			<p className="mt-2 text-sm text-zinc-600 ">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>
			<div className="mt-6 flex">
				<input
					type="email"
					placeholder="Email address"
					aria-label="Email address"
					required
					className="00 0.15] ext-zinc-500 teal-400 al-400/10 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500  focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
				/>
				<button
					type="submit"
					className="primary ml-4 rounded-md bg-slate-700 px-3 py-2 text-sm text-white transition active:transition-none"
				>
					Join
				</button>
			</div>
		</form>
	)
}
